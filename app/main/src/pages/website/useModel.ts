import { ProTableProps } from '@ant-design/pro-components'
import create from 'zustand'
import getWebSiteListAPI, { WebSiteListRequestParams, WebSiteListResponseTypes } from '@/api/website/list'
import { PageTable } from './PageTableProList';

export const useWebSiteStore = create<{
  webSiteList: WebSiteListResponseTypes['data'],
  total: number;
  pageTableList: PageTable[],
  webSiteTitle: string;
  fetch: (params: WebSiteListRequestParams) => Promise<WebSiteListResponseTypes>;
  setPageTableList(list: PageTable[], title: string): void
}>((set) => ({
  webSiteList: [],
  pageTableList: [],
  total: 0,
  webSiteTitle: '',
  fetch: async (params: WebSiteListRequestParams) => {
    const response = await getWebSiteListAPI(params)
    return {
      success: true,
      ...response
    }
  },
  setPageTableList: (list: PageTable[], title: string) => {
    set({ pageTableList: list, webSiteTitle: title })
  }
}))