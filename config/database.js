module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'dclv'),
        username: env('DATABASE_USERNAME', null),
        password: env('DATABASE_PASSWORD', null),
      },
      // settings: {
      //   uri: "mongodb://hoangthuan:Thanh171098@cluster0-shard-00-00.hn9kj.mongodb.net:27017,cluster0-shard-00-01.hn9kj.mongodb.net:27017,cluster0-shard-00-02.hn9kj.mongodb.net:27017/dclv?ssl=true&replicaSet=atlas-13rs4l-shard-0&authSource=admin&retryWrites=true&w=majority",
      //   database: "dclv"
      // },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
