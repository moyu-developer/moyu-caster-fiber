import { DingdingOutlined, GoogleOutlined, DisconnectOutlined, GithubOutlined, WechatOutlined } from "@ant-design/icons";
import { Button, Card, Space, Tooltip } from "antd";
import { LoginForm } from "./LoginForm";
import { useStyles } from "./useStyles";

export default () => {
  const styles = useStyles();

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <LoginForm />
        <Space>
          <Button icon={<DisconnectOutlined />} shape="round">
            密码登录
          </Button>
          <Tooltip title="微信" >
            <Button type="primary" ghost icon={<WechatOutlined />} />
          </Tooltip>
          <Tooltip title="钉钉" >
            <Button type="primary" ghost  icon={<DingdingOutlined />} />
          </Tooltip>
          <Tooltip title="Github" >
            <Button type="primary" ghost  icon={<GithubOutlined />} />
          </Tooltip>
          <Tooltip title="Google" >
            <Button type="primary" ghost  icon={<GoogleOutlined />} />
          </Tooltip>
        </Space>
      </div>
      {/* <Card className={styles.account} >111</Card> */}
    </div>
  );
};
