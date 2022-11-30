import fp from "fastify-plugin";

import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export default fp(async (fastify) => {
  void fastify.register(swagger, {
    swagger: {
      securityDefinitions: {
        apiKey: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
      tags: [
        {name: 'user', description: '用户模块'},
        { name: 'website', description: '站点模块' },
        { name: 'app', description: '全局模块' },
        { name: 'auth', description: '权限模块' }
      ],
      info: {
        title: "Caster Fiber",
        version: "v1.0.0",
        description: "河狸搭建平台接口文档，使用Fastify打造的高性能API",
      },
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  });
  void fastify.register(swaggerUI, {
    routePrefix: "/documentation",
    uiConfig: {
      docExpansion: "none",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
});
