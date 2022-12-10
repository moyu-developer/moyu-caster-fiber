import { request } from "@/utils";

export interface PageTableListRequestParams {
  current: number;
  pageSize: number;
  webSiteId: string;
  [K: string]: any;
}

export interface PageTableListResponseTypes {
  total: number;
  data: any[];
}

export default async function name(
  params: PageTableListRequestParams
): Promise<PageTableListResponseTypes> {
  return request({
    url: "/page-table/list",
    params,
  });
}
