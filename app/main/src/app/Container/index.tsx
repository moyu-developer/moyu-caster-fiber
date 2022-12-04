import { Outlet, useLocation, useRouteData } from "umi";
import { Alert, Avatar, Badge, Breadcrumb, Layout, Space, Typography } from "antd";
import AvatarMenu from "./Avatar";
import { SideContainer } from "./SideMenu";
import { menuRoutes } from '../../../config/routes'
import useStyles from "./styles";
import { useMemo } from "react";

const { Content } = Layout;

const Container: React.FC = () => {
  const styles = useStyles();
  const { pathname } = useLocation()

  const currentRouteName = useMemo(() => {
    return menuRoutes.find(route => route.path === pathname)?.name
  }, [pathname])

  return (
    <Layout className={styles.layout}>
      <Layout.Sider theme="light" width={250}>
        <SideContainer />
      </Layout.Sider>
      <Content className={styles.content} >
        <div className={styles.title} >
          {currentRouteName}
        </div>
        <div className={styles.outlet} >
          <Outlet/>
        </div>
      </Content>
    </Layout>
  );
};

export default Container;
