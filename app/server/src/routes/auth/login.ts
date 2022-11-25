import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { compareSync } from 'bcryptjs'

const login: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  const requestSchema = {
    description: '用户登录接口',
    tags: ['auth'],
    summary: '用户登录',
    body: Type.Object({
      username: Type.String(),
      password: Type.String()
    }),
    response: {
      200: fastify.handleResponseSchema(Type.Object({
        token: Type.String()
      }))
    }
  }

  fastify.post<{
    Body:Static<typeof requestSchema.body>   
  }>('/login', {
    schema: requestSchema
  }, async function (request, reply) {
    const { username, password } = request.body

    // 查询用户信息
    const user = await fastify.prisma.user.findUnique({
      where: {
        name: username
      }
    })
    
    // 用户未找到
    if (!user?.id) {
      return reply.notFound(`当前用户名${username}未找到，请确认。`)
    }

    // 密码错误
    if (!compareSync(password, user.password)) {
      return reply.notFound(`用户密码错误，请重新输入。`)
    }

    // 生成token
      const token = fastify.jwt.sign({
        id: user.id
       })

    return {
      token
    }
  })
}

export default login;
