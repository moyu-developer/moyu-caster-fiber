import { FastifyPluginAsync } from 'fastify'
const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  }),
  fastify.get('/test', async function (request, reply) {
    return { root: `test` }
  })

}

export default root;
