import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { parse, stringify } from '@iarna/toml';
import { createServer } from 'net';
import prompts from 'prompts';

interface PortConfig {
  port: number;
  [key: string]: any;
}

interface Config {
  project_id: string;
  api: PortConfig;
  db: PortConfig & {
    shadow_port: number;
    pooler?: {
      port: number;
    };
  };
  studio: PortConfig;
  inbucket: PortConfig;
  analytics: PortConfig;
  [key: string]: any;
}

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = createServer();

    server.once('error', () => {
      resolve(false);
    });

    server.once('listening', () => {
      server.close();
      resolve(true);
    });

    server.listen(port, '127.0.0.1');
  });
}

async function findNextAvailableBasePort(startPort: number = 54321): Promise<number> {
  // Check ports in increments of 10 (54321, 54331, 54341, etc)
  let basePort = startPort;
  
  while (true) {
    // Check if any of the next 5 ports are in use (we need multiple ports for different services)
    const portsToCheck = Array.from({ length: 5 }, (_, i) => basePort + i);
    const portAvailability = await Promise.all(
      portsToCheck.map(port => isPortAvailable(port))
    );

    // If all ports in this range are available, we've found our base port
    if (portAvailability.every(available => available)) {
      return basePort;
    }

    // Move to the next increment of 10
    basePort += 10;
  }
}

async function updateConfig() {
  const configPath = join(process.cwd(), 'config.toml');
  
  try {
    // Read and parse the current config
    const configContent = readFileSync(configPath, 'utf-8');
    const config = parse(configContent) as Config;

    // Prompt for project name
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'Enter the project name:',
      validate: value => value.length > 0 ? true : 'Project name cannot be empty'
    });

    if (!response.projectName) {
      console.error('Project name is required');
      process.exit(1);
    }

    // Update project name
    config.project_id = response.projectName;

    // Find the next available base port
    const basePort = await findNextAvailableBasePort();

    // Update all the ports in the config
    config.api.port = basePort;
    config.db.port = basePort + 1;
    config.db.shadow_port = basePort - 1;
    if (config.db.pooler) {
      config.db.pooler.port = basePort + 8;
    }
    config.studio.port = basePort + 2;
    config.inbucket.port = basePort + 3;
    config.analytics.port = basePort + 6;

    // Write the updated config back to the file
    const updatedContent = stringify(config);
    writeFileSync(configPath, updatedContent);

    console.log('\nConfiguration updated successfully!');
    console.log(`Project name set to: ${response.projectName}`);
    console.log('\nPort assignments:');
    console.log(`API:       ${basePort}`);
    console.log(`DB:        ${basePort + 1}`);
    console.log(`Studio:    ${basePort + 2}`);
    console.log(`Inbucket:  ${basePort + 3}`);
    console.log(`Analytics: ${basePort + 6}`);
    if (config.db.pooler) {
      console.log(`DB Pooler: ${basePort + 8}`);
    }
    console.log(`Shadow DB: ${basePort - 1}`);

  } catch (error) {
    console.error('Error updating configuration:', error);
    process.exit(1);
  }
}

// Run the script
updateConfig();
