import { FastifyPluginAsync } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { OriginDBSchema } from "./schema";

const createOriginRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    security: fastify.SECURITY,
    description: "新建一个登录来源渠道信息",
    tags: ["origin"],
    summary: "创建渠道",
    body: Type.Pick(OriginDBSchema, ["name", "type"]),
    response: {
      200: fastify.handleResponseSchema(
        Type.Object({
          id: Type.String(),
        })
      ),
    },
  };
  fastify.post<{
    Body: Static<typeof requestSchema.body>;
  }>(
    "/create",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request) {
      try {
        const data = await fastify.prisma.origin.create({
          data: {
            ...request.body,
          },
        });
        return {
          id: data.id,
        };
      } catch (error) {
        throw error;
      }
    }
  );
};

export default createOriginRoute;
