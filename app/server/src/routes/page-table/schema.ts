import { Type } from "@sinclair/typebox"

export const PageTableDBSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  createdAt: Type.Date(),
  updatedAt: Type.Date(),
  route: Type.String(),
  state: Type.String(),
  status: Type.Number(),
  webSiteId: Type.String(),
})