import { FastifyPluginAsync } from 'fastify'

const optsss = {
  schema: {
    description: 'post some data',
    tags: ['architect'],
    summary: 'qwerty',
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  }),
  fastify.get('/test', optsss, async function (request, reply) {
    return { root: `test` }
  })

}

export default root;
