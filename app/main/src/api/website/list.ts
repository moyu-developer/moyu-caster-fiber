import { request } from "@/utils";

export interface WebSiteListRequestParams {
  current: number;
  pageSize: number;
}

export interface WebSiteListResponseTypes {
  total: number;
  data: any[];
}

export default async function name(
  params: WebSiteListRequestParams
): Promise<WebSiteListResponseTypes> {
  return request({
    url: "/website/list",
    params,
  });
}
