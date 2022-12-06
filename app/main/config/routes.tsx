import { ProLayoutProps } from '@ant-design/pro-components'

export type Route = ProLayoutProps['route'];

export const menuRoutes = [
  { path: "/website", component: "@/pages/website", name: 'WebSite', 
  wrappers: [
    '@/wrappers/withAuth',
  ], },
]

const routes: any[] = [
  { path: '/', redirect: '/website' },
  { path: "/login", component: "login" },
  {
    component: "@/app/index",
    routes: menuRoutes,
  },
  { path: "/editor/:webSiteId/:pageId", component: "@/pages/editor" },
  { path: "/notfound", component: "@/pages/404" },
  {
    path: "*",
    redirect: "/notfound?type=NOTFOUND",
  },
]

export default routes
