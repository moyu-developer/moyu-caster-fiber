import { Type } from "@sinclair/typebox"
import { PageTableStatus } from '@prisma/client'

export const PageTableDBSchema = Type.Object({
  id: Type.String({
    minLength: 12,
    maxLength: 12,
    description: 'params/:id长度最少是12位',
  }),
  name: Type.String(),
  createdAt: Type.Date(),
  updatedAt: Type.Date(),
  route: Type.String(),
  state: Type.String(),
  status: Type.Enum(PageTableStatus),
  webSiteId: Type.String(),
  userId: Type.String()
})