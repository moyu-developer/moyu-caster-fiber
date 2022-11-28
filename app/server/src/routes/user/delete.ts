import { Static, Type } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";

const login: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    description: "通过用户id来删除用户信息",
    tags: ["user"],
    summary: "删除用户",
    params: Type.Object({
      id: Type.String()
    }),
    response: {
      200: fastify.handleResponseSchema(Type.Object({
        id: Type.String(),
      })),
    },
  };

  fastify.delete<{
    Params: Static<typeof requestSchema["params"]>;
  }>(
    "/delete/:id",
    {
      schema: requestSchema,
    },
    async function (request): Promise<any> {
      const id = request.params.id
      const row = await fastify.prisma.user.delete({
        where: {
          id
        }
      })
      return {
        id: row.id,
      }
    }
  );
};

export default login;
