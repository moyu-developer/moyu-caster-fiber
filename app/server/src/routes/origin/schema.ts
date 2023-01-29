import { Type } from "@sinclair/typebox"

export const OriginDBSchema = Type.Object({
  id: Type.String({
    description: '渠道id'
  }),
  name: Type.String({
    description: '渠道名称'
  }),
  type: Type.Number({
    description: '渠道类型'
  }),
  createdAt: Type.Optional(Type.String({
    description: '创建时间'
  })),
  updatedAt: Type.Optional(Type.String({
    description: '更新时间'
  })),
})