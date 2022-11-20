import fp from "fastify-plugin";
import jwt, { JWT } from '@fastify/jwt'

declare module 'fastify' {
  export interface FastifyInstance {
    jwt: JWT
  }
}

export default fp(async (fastify) => {
  fastify.register(jwt, {
    secret: 'supersecret'
  })
});
