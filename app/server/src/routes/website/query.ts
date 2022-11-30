import { FastifyPluginAsync } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { WebSiteDBSchema } from "./schema";

const appInfo: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    description: "查询站点信息内容",
    tags: ["website"],
    summary: "站点列表信息",
    querystring: Type.Intersect([
      Type.Object({
        current: Type.Number(),
        pageSize: Type.Number(),
      }),
      Type.Partial(Type.Pick(WebSiteDBSchema, ["env", "name", "id"])),
    ]),
    response: {
      200: fastify.handleResponseSchema(
        Type.Object({
          current: Type.Number(),
          pageSize: Type.Number(),
          total: Type.Number(),
          list: Type.Array(WebSiteDBSchema),
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
    async function (request, reply) {
      const { current, pageSize, ...params } = request.query;
      console.log(params, "params");
      const rows = await fastify.prisma.webSite.findMany({
        skip: (current - 1) * pageSize,
        take: pageSize,
      });
      return {
        rows,
      };
    }
  );
};

export default appInfo;
