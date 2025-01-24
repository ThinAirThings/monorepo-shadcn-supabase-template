# Product Requirements Document (PRD)
**CLI Tool for Automated Documentation Crawling & Synthesis**

---

## 1. Overview

The purpose of this tool is to automate the process of:

1. Crawling software documentation websites (using the [Firecrawl API](https://firecrawl.dev/)).
2. Saving each page of documentation as an individual Markdown file (“raw” form).
3. Optionally transforming each “raw” Markdown file via an AI system to produce a refined “signal” file.
4. Concatenating (“combining”) all “raw” Markdown files into a single comprehensive Markdown file, which can be passed into an AI assistant for summarization and advanced code generation support.

Users have been doing this by hand, which is time-consuming and error-prone. The CLI tool we build will streamline this workflow, prompting users for required inputs and automatically generating the desired folder structures and files.

---

## 2. Goals and Objectives

1. **Automate Firecrawl Usage**  
   Provide an interactive CLI that queries the user for:
   - The main URL to crawl.
   - Subdirectory paths to include.
   - Paths to exclude.
   - Crawl limit to guard against excessive requests.

2. **Automated Folder & File Structure**  
   Generate an organized folder hierarchy based on the user’s chosen library name, for example:

    ```shell
    .
    ├── <library-name>
    │   └── raw
    │       ├── page-1.md
    │       ├── page-2.md
    │       └── ...
    │   └── signal
    │       ├── page-1.md
    │       ├── page-2.md
    │       └── ...
    │   └── combined.md
    ```

   - `raw` contains the direct output from the Firecrawl API.
   - `signal` contains AI-refined/“noise-stripped” versions of each raw doc.
   - A single `combined.md` file contains the concatenated content from the `raw` folder (or optionally from the `signal` folder if desired).

3. **Interactive Prompting**  
   Use [commander.js](https://www.npmjs.com/package/commander) or a similar CLI framework to:
   - Prompt the user for the name of the doc set (e.g., `react-hook-form`, `shadcn`, `zod`).
   - Prompt for main URL.
   - Prompt for multiple include paths (loop until user is done).
   - Prompt for multiple exclude paths (loop until user is done).
   - Prompt for a crawl limit, to cap how many pages Firecrawl should retrieve.

4. **AI-Driven Signal Extraction**  
   - After the raw Markdown files are created, the tool optionally calls an AI endpoint (user-provided or integrated) to strip out extraneous content (ads, disclaimers, navigation links, etc.).
   - Saves the refined output to the corresponding `signal` folder under each page name.

5. **Master Documentation Consolidation**  
   - Collect all documents in the `raw` folder and concatenate them into a single `combined.md`.
   - Optionally do the same from the `signal` folder if the user prefers a refined combined version.

---

## 3. Requirements

### 3.1 Functional Requirements

1. **CLI Prompts**
   - **URL Prompt**: “What is the base URL you want to crawl?”
   - **Include Paths Prompt**: Repeated prompt to add each path until user signals completion.
   - **Exclude Paths Prompt**: Repeated prompt to add each path until user signals completion.
   - **Limit Prompt**: “Please specify a maximum page limit for the crawl.”
   - **Documentation Set Name Prompt**: “Please provide a name for this documentation set (e.g., ‘react-hook-form’).”

2. **File/Directory Creation**
   - Automatically create a directory named after the documentation set (e.g., `react-hook-form`).
   - Within that directory, create a `raw` subdirectory for Firecrawl’s raw Markdown outputs.
   - Create a corresponding `signal` subdirectory for the refined outputs.
   - Generate `combined.md` after raw downloads complete.

3. **Crawl Execution**
   - Interact with the Firecrawl API endpoint (e.g., `POST /crawl`).
   - Retrieve Markdown (or raw text) for each page.
   - Save each page to `raw/<page-name>.md`.
     - `<page-name>` is derived from the final segment of the URL path (e.g., `docs`, `advanced-usage`, `faqs`).

4. **Signal Refinement (AI)**
   - For each `raw/<page-name>.md` file, optionally send the content to an AI system:
     - Removes extraneous data.
     - Focuses on relevant info.
     - Returns a refined doc, saved in `signal/<page-name>.md`.

5. **Document Combination**
   - After the crawling completes (and optionally after the refinement step completes), run a process to:
     - Merge the contents of all Markdown files into a single `combined.md`.
     - Provide a prompt to confirm which directory (`raw` or `signal`) to combine.
   - `combined.md` is stored in the root of the library’s directory.

6. **Error Handling**
   - If the user enters an invalid URL, handle gracefully.
   - If the user tries to exclude or include paths that are invalid, provide a message but allow the user to continue or re-enter.
   - If the Firecrawl API fails, provide a descriptive error message.

### 3.2 Non-Functional Requirements

1. **Performance**  
   - Must handle crawling up to the user-specified limit (e.g., 100 pages) efficiently.
   - Avoid overwhelming the Firecrawl API or exceeding rate limits.

2. **Maintainability**  
   - Written in Node.js using commander.js for easy updates.
   - Clear separation of concerns:
     - Prompting / CLI logic  
     - Crawling / API integration  
     - File I/O  
     - Signal / AI refinement logic

3. **Usability**  
   - Provide descriptive prompts and feedback.
   - Offer clear success or error messages.

4. **Extendability**  
   - Easy to integrate new transformations or AI steps in the future.
   - Straightforward to add new configuration options for the Firecrawl API if needed.

---

## 4. User Journey / Flow

1. **CLI Start**  
   - User runs the command `documentation-collector` (or another chosen command name).

2. **CLI Prompts**  
   - **Prompt 1**: “Enter the main URL to crawl.” (e.g., `https://react-hook-form.com`)
   - **Prompt 2**: “Enter an include path (type ‘done’ when finished).”  
     - The user can repeatedly add paths such as `docs`, `advanced-usage`, etc.
   - **Prompt 3**: “Enter an exclude path (type ‘done’ when finished).”
   - **Prompt 4**: “Enter a crawl limit (default is 100).”
   - **Prompt 5**: “Enter a name for this documentation set.” (e.g., `react-hook-form`)

3. **Directory Setup**  
   - Creates `./react-hook-form/raw/` and `./react-hook-form/signal/`.

4. **Firecrawl Execution**  
   - Sends a request to Firecrawl’s `/crawl` endpoint with the specified options.
   - Stores each scraped page’s Markdown in `./react-hook-form/raw/<page-name>.md`.

5. **Signal Refinement (Optional)**
   - For each file in `raw/`, the CLI can send the content to an AI system for cleaning.
   - Output is written to `signal/<page-name>.md`.

6. **Combine Files**
   - User is prompted to combine from `raw` or `signal`.
   - Files from that directory are concatenated into a single `combined.md`.
   - Placed in `./react-hook-form/combined.md`.

7. **Completion**  
   - The CLI notifies the user that everything is finished and where to find the files.

---

## 5. Data Structures & File Organization

Below is a mermaid diagram illustrating the workflow:

    ```mermaid
    flowchart TB
        subgraph CLI Tool
        A[User Input] --> B[Command Parser (commander.js)]
        B --> C[Firecrawl Request Builder]
        C --> D[Firecrawl API]
        D --> E[MD File Generation in raw/]
        E --> F[Optional AI Refinement -> signal/]
        F --> G[combined.md creation]
        end
    ```

- **Commander.js** organizes the prompts and subcommands.  
- **Firecrawl Request** is built using the user’s input.  
- **Output Files**:
  - `./<doc-set-name>/raw` (raw, unmodified files)  
  - `./<doc-set-name>/signal` (refined by AI)  
  - `./<doc-set-name>/combined.md` (entire content merged)

---

## 6. Implementation Considerations

1. **Firecrawl API Integration**  
   - Must handle API key or credentials if required.
   - The user might provide them or they could be read from a config file.

2. **Naming Pages**  
   - Derive the filename from the last URL segment.  
   - Handle collisions by appending incremented indices (e.g., `docs-1.md`, `docs-2.md`) if necessary.

3. **AI Post-Processing**  
   - The user decides if they want to run the refinement step.
   - Could be integrated with a remote or local LLM.
   - Should remain optional in case the user only wants raw docs.

4. **Re-Entrancy**  
   - If a user re-runs the CLI with the same doc set name, either overwrite or place them in a new folder. The CLI could ask for confirmation.

5. **Edge Cases**  
   - No include paths if the user only wants the root page.
   - The site might have many subpages—limit ensures we don’t scrape too many.
   - Repeated page names.

---

## 7. Example CLI Usage

Below is an example flow illustrating how a user might interact with the tool:

    ```shell
    # Step 1: Install the CLI globally (or use npx for local usage)
    documentation-collector

    # Step 2: The CLI prompts the user:
    ? Enter the main URL: https://react-hook-form.com
    ? Add an include path (type 'done' to finish): docs
    ? Add an include path (type 'done' to finish): advanced-usage
    ? Add an include path (type 'done' to finish): done
    ? Add an exclude path (type 'done' to finish): blog/*
    ? Add an exclude path (type 'done' to finish): done
    ? Enter a crawl limit (default=100): 50
    ? Enter a name for this documentation set: react-hook-form

    # The tool then crawls and saves:
    # ./react-hook-form/raw/<page-name>.md
    # Optionally runs an AI cleaning step -> ./react-hook-form/signal/<page-name>.md
    # Combines them into ./react-hook-form/combined.md
    ```

---

## 8. Future Enhancements

1. **Automatic Summarization**  
   - Post-process `combined.md` through an AI to create a “master documentation” summary.

2. **Config File**  
   - Allow advanced users to skip interactive prompts by supplying a YAML/JSON config.

3. **Built-in Viewer**  
   - Provide a lightweight server to quickly browse the crawled docs.

4. **Incremental Updates**  
   - Re-crawl only changed or newly added pages to reduce overhead.

---

## 9. Acceptance Criteria

1. **User Input**  
   - Main URL, includes, excludes, limit, doc set name—CLI completes without error.

2. **File Structure**  
   - Proper creation of `raw/` and `signal/` subfolders, plus `combined.md`.

3. **Respect Crawl Options**  
   - Includes, excludes, and limit are accurately passed to Firecrawl.

4. **AI Refinement**  
   - Signal folder contains refined docs if user opts in.

5. **Combined File**  
   - `combined.md` accurately merges the contents of either `raw/` or `signal`.

---

## 10. Conclusion

This PRD details the requirements for building a CLI tool that works with the Firecrawl API to scrape documentation, store it in a structured folder tree, optionally refine the docs via AI, and produce both standalone files and a combined master document. By following these guidelines, a code-generating AI can implement this system to deliver a powerful workflow for acquiring and refining up-to-date documentation.
