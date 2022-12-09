import { FastifyPluginAsync } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { PageTableDBSchema } from "./schema";

const route: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    description: "创建站点页面",
    tags: ["pageTable"],
    summary: "创建页面",
    body: Type.Omit(PageTableDBSchema, ['updatedAt', 'createdAt', "id", "userId"]),
    response: {
      200: fastify.handleResponseSchema(
        Type.Object({
          id: Type.String()
        })
      ),
    },
    security: fastify.SECURITY
  };
  fastify.post<{
    Body: Static<typeof requestSchema.body>;
    User: {
      id: string;
    }
  }>(
    "/create",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request, reply) {
      const { id: userId }: any = request.user
      const webSite = await fastify.prisma.webSite.findUnique({
        where: {
          id: request?.body.webSiteId
        }
      })
      if (!webSite) {
        reply.notFound(`当前站点${request?.body.webSiteId}未找到，请检查或者新建后重试。`)
      }
      
      const pageRow = await fastify.prisma.pageTable.create({
        data: {
          ...request.body,
          userId,
        }
      })

      return {
        id: pageRow.id
      }
    }
  );
};

export default route;
