module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      // settings: {
      //   host: env('DATABASE_HOST', '127.0.0.1'),
      //   srv: env.bool('DATABASE_SRV', false),
      //   port: env.int('DATABASE_PORT', 27017),
      //   database: env('DATABASE_NAME', 'dclv'),
      //   username: env('DATABASE_USERNAME', null),
      //   password: env('DATABASE_PASSWORD', null),
      // },
      settings: {
        uir: "mongodb+srv://hoangthuan:Thanh171098@cluster0.hn9kj.mongodb.net/dclv?retryWrites=true&w=majority",
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
