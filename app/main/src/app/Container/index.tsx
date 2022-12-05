import { Outlet, useLocation, useRouteData } from "umi";
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Layout,
  Space,
  Typography,
} from "antd";
import AvatarMenu from "./Avatar";
import { SideContainer } from "./SideMenu";
import { menuRoutes } from "../../../config/routes";
import useStyles from "./styles";
import { useMemo } from "react";
import { GithubFilled, GithubOutlined, UserOutlined } from "@ant-design/icons";
import { RemixIcon } from "@/components/RemixIcon";

const { Content } = Layout;

const Container: React.FC = () => {
  const styles = useStyles();
  const { pathname } = useLocation();

  const currentRouteName = useMemo(() => {
    return menuRoutes.find((route) => route.path === pathname)?.name;
  }, [pathname]);

  return (
    <Layout className={styles.layout}>
      <Layout.Sider theme="light" width={250}>
        <SideContainer />
      </Layout.Sider>
      <Content className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{currentRouteName}</div>
          <Space size={12} >
            <Space size={2} >
            <Button type="text" onClick={() => window.open(`https://github.com/wangly19`) } icon={<RemixIcon className={styles.icon} type="icon-github-line"/>} />
            <Button type="text" icon={<RemixIcon className={styles.icon} type="icon-message-3-line"/>} />
            <Button type="text" icon={<RemixIcon className={styles.icon} type="icon-contrast-2-line"/>} />
            <Button type="text" icon={<RemixIcon className={styles.icon} type="icon-bug-line"/>} />
            </Space>
            <Avatar size={30} icon={<UserOutlined />} />
          </Space>
        </div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default Container;
