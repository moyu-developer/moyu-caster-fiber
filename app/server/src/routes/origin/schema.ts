import { Type } from "@sinclair/typebox"

export const OriginDBSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  type: Type.Number(),
  createdAt: Type.Optional(Type.String()),
  updatedAt: Type.Optional(Type.String()),
})