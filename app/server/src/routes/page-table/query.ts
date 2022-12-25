import { FastifyPluginAsync } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { PageTableDBSchema } from "./schema";

const route: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    description: "查询页面列表",
    tags: ["pageTable"],
    summary: "站点页面列表",
    querystring: Type.Intersect([
      Type.Object({
        current: Type.Number(),
        pageSize: Type.Number(),
      }),
      Type.Partial(Type.Pick(PageTableDBSchema, ["id", "name", "route", "status", "webSiteId"])),
    ]),
    response: {
      200: fastify.handleResponseSchema(
        Type.Object({
          current: Type.Number(),
          pageSize: Type.Number(),
          total: Type.Number(),
          data: Type.Array(PageTableDBSchema),
        })
      ),
    },
    security: fastify.SECURITY
  };
  fastify.get<{
    Querystring: Static<typeof requestSchema.querystring>;
  }>(
    "/list",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request) {
      const { id: userId }: any = request.user
      const { current, pageSize, ...params } = request.query;
      const count = await fastify.prisma.pageTable.count()
      const rows = await fastify.prisma.pageTable.findMany({
        skip: (current - 1) * pageSize,
        take: pageSize,
        where: {
          ...params,
          userId,
        },
        include: {
          webSite: true,
        }
      });
      return {
        total: count,
        data: rows,
        current,
        pageSize
      };
    }
  );
};

export default route;
