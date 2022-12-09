import { Type } from "@sinclair/typebox"

export const UserDBSchema = Type.Object({
  id: Type.String({
    minLength: 16
  }),
  name: Type.String(),
  password: Type.String(),
  createdAt: Type.Optional(Type.String()),
  updatedAt: Type.Optional(Type.String()),
  avatar: Type.Optional(Type.String()),
  openId: Type.Optional(Type.String()),
  originType: Type.Number(),
})