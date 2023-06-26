import { CodegenConfig } from '@graphql-codegen/cli';

const baseUrl = import.meta.env.VITE_BASE_URL;

const config: CodegenConfig = {
  schema: baseUrl,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;