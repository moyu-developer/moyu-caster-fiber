import fp from "fastify-plugin";
import monogodb from '@fastify/mongodb'

export default fp(async (fastify) => {
  fastify.register(monogodb, {
    forceClose: true,
    url: 'mongodb://mongo/mydb'
  })
});
