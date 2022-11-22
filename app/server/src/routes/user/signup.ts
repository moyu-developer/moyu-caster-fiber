import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'

const requestSchema = {
  description: '创建用户信息',
  tags: ['user'],
  summary: '注册用户',
  body: Type.Object({
    username: Type.String(),
    password: Type.String(),
    avatar: Type.Optional(Type.String()),
    openId: Type.Optional(Type.String()),
    originType:  Type.Optional(Type.Number())
  }),
  response: {
    200: Type.Object({
      id: Type.String()
    })
  }
}

const login: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{
    Body:Static<typeof requestSchema.body>   
  }>('/signup', {
    schema: requestSchema
  }, async function (request, reply): Promise<any> {
    return {
      token: '1'
    }
  })
}

export default login;
