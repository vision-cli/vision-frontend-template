import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8080/api/graphql',
  documents: ['./graphql/queries/*.graphql', './graphql/mutations/*.graphql'],
  config: {
    nonOptionalTypename: true,
    withRefetchFn: true,
    namingConvention: {
      enumValues: 'upper-case#upperCase',
    },
    scalars: {
      Time: 'string',
    },
  },
  generates: {
    'graphql/generated.ts': {
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      preset: 'client',
    },
  },
};

export default config;
