import { ProTableProps } from '@ant-design/pro-components'
import create from 'zustand'
import getWebSiteListAPI, { WebSiteListRequestParams, WebSiteListResponseTypes } from '@/api/website/list'

export const useWebSiteStore = create<{
  webSiteList: WebSiteListResponseTypes['data'],
  total: number;
  fetch: (params: WebSiteListRequestParams) => Promise<WebSiteListResponseTypes>
}>((set) => ({
  webSiteList: [],
  total: 0,
  fetch: async (params: WebSiteListRequestParams) => {
    const response = await getWebSiteListAPI(params)
    return {
      success: true,
      ...response
    }
  },
}))