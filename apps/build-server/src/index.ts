import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator'
import { z } from "zod";
import { $, spawn } from "bun";
import { serveStatic } from 'hono/bun'
import { cors } from 'hono/cors'
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const app = new Hono();

// Add CORS middleware
app.use('/*', cors({
    origin: 'http://localhost:3000', // Your Next.js app origin
    credentials: true,
}));

// Serve the compiled React app files (CSS and JS)
app.get('/components/:componentId/dist/:file{.+\\.(js|css)}', async (c) => {
    const componentId = c.req.param('componentId');
    const file = c.req.param('file');
    const distPath = `./components/${componentId}/dist`;
    
    try {
        // Read all files in the dist directory
        const files = await readdir(distPath);
        
        // Find the chunk file that matches the requested file type
        const ext = file.split('.').pop() || '';
        const targetFile = files.find(f => f.startsWith('chunk-') && f.endsWith(ext));
        
        if (!targetFile) {
            console.error(`File ${file} not found in ${distPath}`);
            return c.notFound();
        }

        const filePath = join(distPath, targetFile);
        const fileContent = await Bun.file(filePath).arrayBuffer();
        
        return new Response(fileContent, {
            headers: {
                'Content-Type': file.endsWith('.js') ? 'application/javascript' : 'text/css',
                'Cache-Control': 'public, max-age=31536000',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true',
            },
        });
    } catch (error) {
        console.error(`Failed to serve from ${distPath}:`, error);
        return c.notFound();
    }
});

app.get("/", (c) => {
    return c.text("Hello Hono!");
});

app.post("/build-component", zValidator('json', z.object({
    componentId: z.string(),
    componentCode: z.string(),
})), async (c) => {
    const { componentId, componentCode } = c.req.valid("json");
    const componentPath = `./components/${componentId}`;
    
    try {
        await $`mkdir -p ${componentPath}`;
        await $`echo "${componentCode}" > ${componentPath}/component.tsx`;
        
        // Start bun create with spawn to get process control
        const proc = spawn(["bun", "create", "./component.tsx", "--force"], {
            cwd: componentPath
        });
        
        // Wait a moment for files to generate
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Kill the process
        proc.kill();
        console.log("Killed bun create process");
        // Run the build process in the component directory
        const buildProc = spawn(["bun", "run", "component.build.ts"], {
            cwd: componentPath
        });

        // Wait for build to complete
        await buildProc.exited;

        return c.json({
            message: "Component built successfully",
            url: `/components/${componentId}`,
        });
    } catch (error: unknown) {
        const err = error as Error;
        return c.json({
            error: "Failed to build component",
            details: err.message
        }, 500);
    }
});

export default {
    port: 5000,
    fetch: app.fetch,
};

