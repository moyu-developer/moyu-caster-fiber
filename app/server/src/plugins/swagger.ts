import fp from "fastify-plugin";

import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export default fp(async (fastify) => {
  void fastify.register(swagger, {
    swagger: {
      securityDefinitions: {
        Authorization: {
          type: "apiKey",
          name: 'token',
          in: 'header'
        }
      },
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
      docExpansion: "full",
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
