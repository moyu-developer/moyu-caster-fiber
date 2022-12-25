import { Type } from "@sinclair/typebox"
import { PageTableStatus } from '@prisma/client'

export const PageTableDBSchema = Type.Object({
  id: Type.String({
    description: '页面ID',
  }),
  name: Type.String({
    minLength: 2,
    maxLength: 50
  }),
  createdAt: Type.Date(),
  updatedAt: Type.Date(),
  route: Type.String(),
  state: Type.String(),
  status: Type.Enum(PageTableStatus),
  webSiteId: Type.String(),
  userId: Type.String()
})