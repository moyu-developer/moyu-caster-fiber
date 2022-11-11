import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";

export type AppOptions = {
  // 将应用程序的自定义选项放在此处。
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  //在这里放置您的自定义代码！

  //请勿触摸以下线条

  //这将加载插件中定义的所有插件

  //这些应该是可重用的支持插件

  //通过您的应用程序
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts,
  });

  void fastify.register(require("@fastify/cors"), {
    origin: [
      " http://localhost:8080",
      " http://127.0.0.1:8080",
      " http://localhost:3000",
    ],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
  });

  void fastify.register(require("@fastify/swagger"), {
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "My FirstAPP Documentation",
        description: "My FirstApp Backend Documentation description",
        version: "0.1.0",
        termsOfService: "https://mywebsite.io/tos",
        contact: {
          name: "John Doe",
          url: "https://www.johndoe.com",
          email: "john.doe@email.com",
        },
      },
      externalDocs: {
        url: "https://www.johndoe.com/api/",
        description: "Find more info here",
      },
      host: "127.0.0.1:3000",
      basePath: "",
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [
        {
          name: "User",
          description: "User's API",
        },
      ],
      definitions: {
        User: {
          type: "object",
          required: ["id", "email"],
          properties: {
            id: {
              type: "number",
              format: "uuid",
            },
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
          },
        },
      },
    },
    uiConfig: {
      docExpansion: "none", // expand/not all the documentations none|list|full
      deepLinking: true,
    },
    staticCSP: false,
    exposeRoute: true,
  });
};

export default app;
export { app, options };
