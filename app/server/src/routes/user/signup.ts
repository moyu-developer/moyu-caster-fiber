import { Static, Type } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { hashSync } from 'bcryptjs'

const signupRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const requestSchema = {
    description: "创建用户信息",
    tags: ["user"],
    summary: "注册用户",
    body: Type.Object({
      name: Type.String(),
      password: Type.String(),
      avatar: Type.Optional(Type.String()),
      openId: Type.Optional(Type.String()),
      originType: Type.Optional(Type.Number()),
    }),
    response: {
      200: fastify.handleResponseSchema(Type.Object({
        id: Type.String(),
      })),
    },
  };

  fastify.post<{
    Body: Static<typeof requestSchema.body>;
  }>(
    "/signup",
    {
      schema: requestSchema,
    },
    async function (request, reply): Promise<any> {
      const { originType = 1, name } = request.body;
      const row = await fastify.prisma.user.findUnique({
        where: {
          name: name,
        },
      });
      if (row?.id) {
        return reply.notFound(`用户名(${name})已经存在`);
      }

      const user = await fastify.prisma.user.create({
        data: {
          ...request.body,
          password: hashSync(request.body.password, 10),
          originType,
        },
      });
      return {
        id: user.id,
      };
    }
  );
};

export default signupRoute;
