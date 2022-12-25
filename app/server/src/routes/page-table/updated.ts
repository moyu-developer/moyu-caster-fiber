import { FastifyPluginAsync } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { PageTableDBSchema } from "./schema";

const route: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    description: "通过页面id来更新页面信息",
    tags: ["pageTable"],
    summary: "更新页面信息",
    params: Type.Pick(PageTableDBSchema, ["id"]),
    body: Type.Partial(Type.Omit(PageTableDBSchema, ['id','updatedAt', 'createdAt', "userId", "webSiteId"])),
    response: {
      200: fastify.handleResponseSchema(PageTableDBSchema),
    },
    security: fastify.SECURITY,
  };
  fastify.put<{
    Params: Static<typeof requestSchema.params>;
    Body: Static<typeof requestSchema.body>;
  }>(
    "/save/:id",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request, reply) {
      try {
        const pageId = request.params?.id;
        const row = await fastify.prisma.pageTable.update({
          where: {
            id: pageId,
          },
          data: request.body
        })
        return row
      } catch (error: any) {
        throw error
      }
    }
  );
};

export default route;
