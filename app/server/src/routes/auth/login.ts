import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'

const requestSchema = {
  description: '获取应用全局的一些基础配置方案。',
  tags: ['auth'],
  summary: '应用信息',
  body: Type.Object({
    username: Type.String(),
    password: Type.String()
  }),
  response: {
    200: Type.Object({
      token: Type.String()
    })
  }
}

const login: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{
    Body:Static<typeof requestSchema.body>   
  }>('/login', {
    schema: requestSchema
  }, async function (request, reply) {
    // const { username } = request.body
    // const row = await fastify.prisma.user.findUnique({
    //   where: {
    //     name: username
    //   }
    // })
    // if (!row?.id) {
    //   reply.notFound(`当前用户名${username}未找到，请确认。`)
    // }
    return {
      token: '1'
    }
  })
}

export default login;
