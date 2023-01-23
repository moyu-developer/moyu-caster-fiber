import { matchRoutes } from 'umi';
import { Route } from 'config/routes'
import 'antd/dist/reset.css';

 
export function onRouteChange({ clientRoutes, location }: any) {
  const route: Route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  if (route) {
    document.title = route.name || '';
  }
}