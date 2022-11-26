import { Outlet } from "umi";
import { Alert, Avatar, Badge, Breadcrumb, Layout, Space, Typography } from "antd";
import AvatarMenu from "./Avatar";
import { SideContainer } from "./SideMenu";
import useStyles from "./styles";

const { Content, Footer } = Layout;

const Container: React.FC = () => {
  const styles = useStyles();
  return (
    <Layout className={styles.layout}>
      <Layout.Sider theme="light" width={250}>
        <SideContainer />
      </Layout.Sider>
      <Content className={styles.content} >
        <Typography.Title level={5} >标题栏</Typography.Title>
        <div>
          1
        </div>
      </Content>
    </Layout>
  );
};

export default Container;
