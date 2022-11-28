import { FastifyPluginAsync, FastifySchema } from "fastify";
import { Type } from "@sinclair/typebox";
import { WebSiteDBSchema } from "./schema";

const appInfo: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema: FastifySchema = {
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
          list: Type.Array(Type.Object({})),
        })
      ),
    },
  };
  fastify.get(
    "/list",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request, reply) {
      return 1;
    }
  );
};

export default appInfo;
