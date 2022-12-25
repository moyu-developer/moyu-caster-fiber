import { FastifyPluginAsync } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { PageTableDBSchema } from "./schema";

const route: FastifyPluginAsync = async (fastify): Promise<void> => {
  const requestSchema = {
    description: "根据id查询当前页面",
    tags: ["pageTable"],
    summary: "查询页面",
    querystring: Type.Object({
      id: Type.String()
    }),
    response: {
      200: fastify.handleResponseSchema(PageTableDBSchema),
    },
    security: fastify.SECURITY,
  };
  fastify.get<{
    Querystring: Static<typeof requestSchema.querystring>;
  }>(
    "/findById",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request, reply) {
      try {
        const pageId = request.query?.id;
        const row = fastify.prisma.pageTable.findUnique({
          where: {
            id: pageId
          },
          include: {
            webSite: true
          }
        })
        return row
      } catch (error: any) {
        throw error
      }
    }
  );
};

export default route;
