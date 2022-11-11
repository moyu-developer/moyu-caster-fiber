import { FastifyPluginAsync } from 'fastify'

const architect: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/architect', async function (request, reply) {
    return `architect`
  })
}

export default architect;
