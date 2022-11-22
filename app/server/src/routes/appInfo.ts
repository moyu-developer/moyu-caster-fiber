import { FastifyPluginAsync, FastifySchema } from 'fastify'
import { Type } from '@sinclair/typebox'

const schemaByTypebox = {
  description: Type.String()
}

const requestSchema: FastifySchema = {
  description: '获取应用全局的一些基础配置方案。',
  tags: ['app'],
  summary: '应用信息',
  querystring: schemaByTypebox,
  response: {
    200: Type.Object({
      title: Type.Optional(Type.String()),
      message: Type.Optional(Type.String()),
    })
  }
}

const appInfo: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/appInfo', {
    schema: requestSchema,
  }, async function (request, reply) {
    return {
      title: `河狸`,
      message: `欢迎体验河狸，这是一个使用Fastify & React打造的页面搭建系统。`
    }
  })
}

export default appInfo;
