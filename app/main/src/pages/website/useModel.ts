import { ProTableProps } from '@ant-design/pro-components'
import create from 'zustand'
import getWebSiteListAPI, { WebSiteListRequestParams, WebSiteListResponseTypes } from '@/api/website/list'
import { PageTable } from './PageTableProList';
import getPageTableListAPI, { PageTableListRequestParams, PageTableListResponseTypes } from '@/api/pageTable/list';

export const useWebSiteStore = create<{
  webSiteList: WebSiteListResponseTypes['data'],
  pageTableList: PageTable[],
  webSiteTitle: string;
  webSiteId?: string;
  fetch: (params: WebSiteListRequestParams) => Promise<WebSiteListResponseTypes>;
  setWebSiteInfo( title: string, id: string): void
  getSitePageTable: (params: PageTableListRequestParams) => Promise<PageTableListResponseTypes | null>;
}>((set, get) => ({
  webSiteList: [],
  pageTableList: [],
  webSiteTitle: '',
  fetch: async (params: WebSiteListRequestParams) => {
    const response = await getWebSiteListAPI(params)
    return {
      success: true,
      ...response
    }
  },
  getSitePageTable: async (params: PageTableListRequestParams) => {
    const { webSiteId } = get()
    if (webSiteId) {
      const response = await getPageTableListAPI({
        ...params,
        webSiteId
      })
      return response
    }
    return null
  },
  setWebSiteInfo: (title: string, id: string) => {
    set({ webSiteTitle: title, webSiteId:  id})
  }
}))