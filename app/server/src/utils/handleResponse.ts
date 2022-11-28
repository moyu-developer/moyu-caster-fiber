/**
 * 在业务上，大多时候我们会将响应结构做一个统一的处理
 */

import { Type } from "@sinclair/typebox";

export const handleResponseSchema  = (data: any) => Type.Object({
  data,
  statusCode: Type.Literal(200),
})