import { ProLayoutProps } from '@ant-design/pro-components'

export type Route = ProLayoutProps['route'];

export const menuRoutes = [
  { path: "/website", component: "@/pages/website", name: 'WebSite' },
]

const routes: any[] = [
  { path: "/login", component: "login" },
  {
    path: "/",
    component: "@/app/index",
    routes: menuRoutes
  },
  { path: "/editor", component: "@/pages/editor" },
  { path: "/notfound", component: "@/pages/404" },
  {
    path: "*",
    redirect: "/notfound?type=NOTFOUND",
  },
]

export default routes
