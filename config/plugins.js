module.exports = ({ env }) => ({
    //...
    'import-export-entries': {
      enabled: true,
    }, 
    //Graphql docs https://docs.strapi.io/dev-docs/plugins/graphql
    graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
    //...
  });