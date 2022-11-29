import fp from "fastify-plugin";
import jwt, { JWT } from '@fastify/jwt'

declare module 'fastify' {
  export interface FastifyInstance {
    jwt: JWT,
    authenticate: any,
  }
}

export default fp(async (fastify) => {
  fastify.register(jwt, {
    secret: 'supersecret',
  })

  fastify.decorate("authenticate", async (request: any, reply: any) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
});
