import { FastifyPluginAsync } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { PageTableDBSchema } from "./schema";

const route: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    description: "删除站点页面",
    tags: ["pageTable"],
    summary: "删除页面",
    params: Type.Pick(PageTableDBSchema, ["id"]),
    response: {
      200: fastify.handleResponseSchema(Type.Boolean()),
    },
    security: fastify.SECURITY,
  };
  fastify.delete<{
    Params: Static<typeof requestSchema.params>;
  }>(
    "/delete/:id",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request, reply) {
      try {
        const { id: userId }: any = request.user;
        const pageId = request.params?.id;
				console.log(pageId, 'pageId')
        const row = await fastify.prisma.pageTable.findUnique({
          where: {
            id: pageId,
          },
        });
        if (!row) {
          reply.notFound(`当前删除的内容不存在，请检查id(${pageId})是否正确。`);
        }

        if (row?.userId !== userId) {
          reply.notFound(`删除失败, ${pageId}创建用户不一致`);
        }

        const result = await fastify.prisma.pageTable.delete({
          where: {
            id: pageId,
          },
        });

        if (result.id) {
          return true;
        }

        reply.notFound(`删除失败`);
      } catch (error: any) {
        throw error
      }
    }
  );
};

export default route;
