import { getVercelURL } from './src/lib/vercel/get-vercel-url';
import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'
import * as dotenv from 'dotenv'
import path from 'path'

// Load .env.local file
dotenv.config({
  path: path.resolve(process.cwd(), '.env.local')
})

const config: CodegenConfig = {
  overwrite: true,
  schema: [{
    [`${getVercelURL()}api/graphql`]: {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      }
    }
  }], 
  documents:'src/**/*.{ts,tsx}',
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        // ...
        // disables the incompatible GraphQL Codegen fragment masking feature
        fragmentMasking: false,
        customDirectives: {
          apolloUnmask: true
        }
      },
      documentTransforms: [
        addTypenameSelectionDocumentTransform
      ],
      plugins: [],
      config: {
        inlineFragmentTypes: "mask",
        customDirectives: {
          apolloUnmask: true
        },
        enumsAsTypes: true,
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
    "./graphql.possibleTypes.json": {
      plugins: ['fragment-matcher'],
      config: {
        module: 'es2015'
      }
    }
  }
};

export default config;