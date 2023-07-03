import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      './graphql/server/schemas/*.ts': {
        skipGraphQLImport: true,
      },
    },
  ],
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
    },
  },
};

export default config;
