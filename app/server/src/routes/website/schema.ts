import { Type } from "@sinclair/typebox"
import { TerminalEnv } from '@prisma/client'

export const WebSiteDBSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  createdAt: Type.Optional(Type.String()),
  updatedAt: Type.Optional(Type.String()),
  env: Type.Enum(TerminalEnv),
  userId: Type.String(),
})