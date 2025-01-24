import { config } from 'dotenv';
import { Command } from 'commander';
import FirecrawlApp from '@mendable/firecrawl-js';
import * as fs from 'fs/promises';
import * as path from 'path';
import inquirer from 'inquirer';
import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

// Initialize dotenv
config();

interface CrawlConfig {
  url: string;
  includePaths: string[];
  excludePaths: string[];
  limit: number;
  docSetName: string;
  debug?: boolean;
  skipCrawl?: boolean;
}

class DocumentationCollector {
  private app: FirecrawlApp;
  private debug: boolean;

  constructor(apiKey: string, debug = false) {
    this.app = new FirecrawlApp({ apiKey });
    this.debug = debug;
  }

  private log(message: string, data?: any) {
    if (this.debug) {
      console.log(`[DEBUG] ${message}`);
      if (data) console.log(JSON.stringify(data, null, 2));
    }
  }

  async promptForConfig(): Promise<CrawlConfig> {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'url',
        message: 'What is the base URL you want to crawl?',
        validate: (input: string) => {
          try {
            new URL(input);
            return true;
          } catch {
            return 'Please enter a valid URL';
          }
        }
      },
      {
        type: 'input',
        name: 'docSetName',
        message: 'Please provide a name for this documentation set (e.g., \'react-hook-form\'):',
        validate: (input: string) => input.length > 0
      }
    ]);

    const includePaths: string[] = [];
    const excludePaths: string[] = [];

    // Collect include paths
    while (true) {
      const { path } = await inquirer.prompt([
        {
          type: 'input',
          name: 'path',
          message: 'Enter an include path (type \'*\' to include everything, \'done\' to finish, or press Enter to skip):',
        }
      ]);

      if (path.toLowerCase() === 'done' || path === '') break;
      if (path === '*') {
        includePaths.push('/*');
        break;
      }
      includePaths.push(path);
    }

    // Collect exclude paths
    while (true) {
      const { path } = await inquirer.prompt([
        {
          type: 'input',
          name: 'path',
          message: 'Enter an exclude path (press Enter to skip, or type \'done\' when finished):',
        }
      ]);

      if (path.toLowerCase() === 'done' || path === '') break;
      excludePaths.push(path);
    }

    const { limit } = await inquirer.prompt<{ limit: number }>({
      type: 'number',
      name: 'limit',
      message: 'Enter a crawl limit (default is 100):',
      default: 100,
      validate: (input: number | undefined) => input ? input > 0 : false
    });

    const { debug } = await inquirer.prompt<{ debug: boolean }>({
      type: 'confirm',
      name: 'debug',
      message: 'Enable debug logging?',
      default: false
    });

    return {
      url: answers.url,
      docSetName: answers.docSetName,
      includePaths,
      excludePaths,
      limit,
      debug
    };
  }

  private async createDirectoryStructure(docSetName: string): Promise<void> {
    const baseDir = path.join(process.cwd(), docSetName);
    const rawDir = path.join(baseDir, 'raw');
    const signalDir = path.join(baseDir, 'signal');

    await fs.mkdir(baseDir, { recursive: true });
    await fs.mkdir(rawDir, { recursive: true });
    await fs.mkdir(signalDir, { recursive: true });
  }

  private async saveMarkdownFile(content: string, filePath: string): Promise<void> {
    await fs.writeFile(filePath, content, 'utf-8');
  }

  private getPageNameFromUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      const pathSegments = urlObj.pathname.split('/').filter(Boolean);
      // Use the last two segments or just the last if there's only one
      const fileName = pathSegments.length > 1 
        ? `${pathSegments[pathSegments.length - 2]}-${pathSegments[pathSegments.length - 1]}` 
        : pathSegments[pathSegments.length - 1] || 'index';
      return `${fileName}.md`;
    } catch (error) {
      this.log(`Error parsing URL ${url}:`, error);
      // Fallback to a safe filename
      return `page-${Date.now()}.md`;
    }
  }

  private async processCrawlResults(
    crawlResponse: import('@mendable/firecrawl-js').CrawlStatusResponse, 
    docSetName: string
  ): Promise<void> {
    this.log('Processing crawl results:', crawlResponse);

    if (crawlResponse.status !== 'completed') {
      throw new Error(`Crawl failed: ${crawlResponse.status}`);
    }

    this.log(`Found ${crawlResponse.data.length} pages to process`);

    for (const page of crawlResponse.data) {
      // Debug the page object to see what we're getting
      this.log('Processing page:', {
        url: page.metadata?.url,
        title: page.metadata?.title,
        contentLength: page.markdown?.length
      });

      // Check metadata.url instead of page.url
      if (!page.metadata?.url || !page.markdown) {
        this.log(`Skipping page - missing url or markdown:`, page);
        continue;
      }

      const pageName = this.getPageNameFromUrl(page.metadata.url);
      const rawPath = path.join(process.cwd(), docSetName, 'raw', pageName);
      
      this.log(`Saving file: ${rawPath}`);
      this.log(`Content length: ${page.markdown.length} characters`);
      
      try {
        await this.saveMarkdownFile(page.markdown, rawPath);
        this.log(`Successfully saved file: ${rawPath}`);
      } catch (error) {
        this.log(`Error saving file ${rawPath}:`, error);
        throw error;
      }
    }
  }

  async combineDocs(docSetName: string, sourceDir: 'raw' | 'signal'): Promise<void> {
    const dir = path.join(process.cwd(), docSetName, sourceDir);
    const files = await fs.readdir(dir);
    let combinedContent = '';

    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      
      const content = await fs.readFile(path.join(dir, file), 'utf-8');
      combinedContent += `\n\n------- START OF ${file} -------\n\n`;
      combinedContent += content;
      combinedContent += `\n\n------- END OF ${file} -------\n\n\n\n`;
    }

    const combinedPath = path.join(process.cwd(), docSetName, 'combined.md');
    await this.saveMarkdownFile(combinedContent, combinedPath);
  }

  private async processWithAI(content: string): Promise<string> {
    try {
      const result = await generateObject({
        model: openai('o1'),
        system: `
          You are a technical documentation refinement system. Your task is to:
          1. Remove any extraneous content (ads, navigation elements, etc.)
          2. Standardize and clean up formatting
          3. Ensure code examples are properly formatted
          4. Remove any duplicate content
          5. Maintain only the essential technical documentation
          6. Preserve all code examples and technical details
          7. Structure the content in a clear, hierarchical manner
        `,
        schema: z.object({
          refinedContent: z.string(),
          metadata: z.object({
            containsCode: z.boolean(),
            primaryTopic: z.string(),
            technicalComplexity: z.enum(['basic', 'intermediate', 'advanced'])
          })
        }),
        prompt: `
          Please refine and clean up this technical documentation content:
          ${content}
        `
      });

      return result.object.refinedContent;
    } catch (error) {
      console.error('AI processing failed:', error);
      // Return original content if AI processing fails
      return content;
    }
  }

  private async createSignalFiles(docSetName: string): Promise<void> {
    const rawDir = path.join(process.cwd(), docSetName, 'raw');
    const signalDir = path.join(process.cwd(), docSetName, 'signal');
    
    const files = await fs.readdir(rawDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    const BATCH_SIZE = 50;

    console.log('\nProcessing files with AI...');
    
    // Process files in batches
    for (let i = 0; i < markdownFiles.length; i += BATCH_SIZE) {
      const batch = markdownFiles.slice(i, i + BATCH_SIZE);
      console.log(`Processing batch ${Math.floor(i/BATCH_SIZE) + 1}/${Math.ceil(markdownFiles.length/BATCH_SIZE)}`);
      
      // Process batch in parallel
      await Promise.all(batch.map(async (file, index) => {
        const batchIndex = i + index;
        console.log(`Processing ${batchIndex + 1}/${markdownFiles.length}: ${file}`);
        
        try {
          const content = await fs.readFile(path.join(rawDir, file), 'utf-8');
          const refinedContent = await this.processWithAI(content);
          await this.saveMarkdownFile(refinedContent, path.join(signalDir, file));
        } catch (error) {
          console.error(`Failed to process ${file}:`, error);
        }
      }));

      // Add a small delay between batches to avoid rate limiting
      if (i + BATCH_SIZE < markdownFiles.length) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.log('Signal files have been created.');
  }

  async crawl(config: CrawlConfig): Promise<void> {
    try {
      this.debug = config.debug || false;
      this.log('Starting crawl with config:', config);

      await this.createDirectoryStructure(config.docSetName);
      this.log('Created directory structure');

      this.log('Initiating crawl request with options:', {
        url: config.url,
        limit: config.limit,
        includePaths: config.includePaths,
        excludePaths: config.excludePaths
      });

      const crawlResponse = await this.app.crawlUrl(config.url, {
        limit: Math.max(1, config.limit - 1),
        includePaths: config.includePaths,
        excludePaths: config.excludePaths,
        scrapeOptions: {
          formats: ['markdown'],
          onlyMainContent: true
        }
      });

      this.log('Received crawl response:', crawlResponse);

      if (!crawlResponse.success) {
        throw new Error(`Crawl failed: ${crawlResponse.error}`);
      }

      await this.processCrawlResults(crawlResponse, config.docSetName);
      console.log('Raw files have been saved.');

      // Process with AI to create signal files
      const { processSignal } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'processSignal',
          message: 'Would you like to process the files with AI to create refined signal files?',
          default: true
        }
      ]);

      if (processSignal) {
        await this.createSignalFiles(config.docSetName);
        console.log('Signal files have been created.');
        
        // Always combine signal files
        await this.combineDocs(config.docSetName, 'signal');
        console.log(`Combined signal files have been saved to ${config.docSetName}/combined.md`);
        console.log('You can now use the combined.md file to create your master document externally.');
      } else {
        console.log('Skipping AI processing.');
      }

    } catch (error) {
      this.log('Error during crawl:', error);
      console.error('An error occurred:', error);
      throw error;
    }
  }

  async processExistingFiles(docSetName: string): Promise<void> {
    try {
      this.log('Starting processing of existing files...');

      // Verify raw directory exists
      const rawDir = path.join(process.cwd(), docSetName, 'raw');
      try {
        await fs.access(rawDir);
      } catch {
        throw new Error(`Raw directory not found at ${rawDir}. Please ensure raw files exist before processing.`);
      }

      // Create signal directory if it doesn't exist
      const signalDir = path.join(process.cwd(), docSetName, 'signal');
      await fs.mkdir(signalDir, { recursive: true });

      // Process with AI to create signal files
      const { processSignal } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'processSignal',
          message: 'Would you like to process the files with AI to create refined signal files?',
          default: true
        }
      ]);

      if (processSignal) {
        await this.createSignalFiles(docSetName);
        console.log('Signal files have been created.');
        
        // Always combine signal files
        await this.combineDocs(docSetName, 'signal');
        console.log(`Combined signal files have been saved to ${docSetName}/combined.md`);
        console.log('You can now use the combined.md file to create your master document externally.');
      } else {
        console.log('Skipping AI processing.');
      }

    } catch (error) {
      this.log('Error processing existing files:', error);
      throw error;
    }
  }
}

async function main() {
  const program = new Command();

  program
    .name('documentation-collector')
    .description('CLI tool for automated documentation crawling & synthesis')
    .version('1.0.0')
    .option('-k, --api-key <key>', 'Firecrawl API key (overrides FIRECRAWL_API_KEY env variable)')
    .option('-d, --debug', 'Enable debug logging')
    .option('-s, --skip-crawl', 'Skip crawling and process existing raw files')
    .parse(process.argv);

  const options = program.opts();
  
  const apiKey = options.apiKey || process.env.FIRECRAWL_API_KEY;
  
  if (!apiKey && !options.skipCrawl) {
    console.error(
      'Please provide a Firecrawl API key either:\n' +
      '1. Using --api-key or -k option\n' +
      '2. Setting FIRECRAWL_API_KEY environment variable in .env file'
    );
    process.exit(1);
  }

  const collector = new DocumentationCollector(apiKey, options.debug);
  
  try {
    if (options.skipCrawl) {
      // Only prompt for doc set name when skipping crawl
      const { docSetName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'docSetName',
          message: 'Please provide the name of the documentation set to process:',
          validate: (input: string) => input.length > 0
        }
      ]);
      
      await collector.processExistingFiles(docSetName);
    } else {
      const config = await collector.promptForConfig();
      await collector.crawl(config);
    }
    console.log('Documentation collection completed successfully!');
  } catch (error) {
    console.error('Failed to collect documentation:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { DocumentationCollector };
