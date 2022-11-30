import { FastifyPluginAsync, FastifySchema } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { WebSiteDBSchema } from "./schema";

const appInfo: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema: FastifySchema = {
    security: fastify.SECURITY,
    description: "创建站点信息内容",
    tags: ["website"],
    summary: "创建站点",
    body: Type.Pick(WebSiteDBSchema, ["name", "env"]),
    response: {
      200: fastify.handleResponseSchema(
        Type.Object({
          id: Type.String(),
        })
      ),
    },
  };
  fastify.post<{
    Body: Static<typeof WebSiteDBSchema>;
  }>(
    "/create",
    {
      schema: requestSchema,
      onRequest: [fastify.authenticate],
    },
    async function (request) {
      try {
        console.log(request.user, "request");
        const { id: userId }: any = request.user;

        const data = await fastify.prisma.webSite.create({
          data: {
            ...request.body,
            userId,
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

export default appInfo;
