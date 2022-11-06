import { Outlet } from 'umi';
import { Avatar, Badge, Breadcrumb, Layout, Space } from 'antd';
import AvatarMenu from './Avatar'
import useStyles from './styles'

const { Content, Footer } = Layout;

const Container: React.FC = () =>  {
  const styles = useStyles()
  return (
    <Layout className={styles.layout}>
    <div className={styles.header} >
      <div className={styles.logo}>
        CASTER FIBER 
      </div>
      <div className={styles.menu}>menu</div>
      <Space>
      <AvatarMenu/>
      </Space>
    </div>
    <Content className={styles.content} >
      <Breadcrumb >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.body} >
        <Outlet/>
      </div>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
  )
}

export default Container;