import { Menu, Dropdown, Button, Avatar, Badge, Typography } from "antd";

const menu = (
  <Menu
    items={[
      {
        key: "logout",
        label: <Typography.Text type="danger">退出登录</Typography.Text>,
      },
    ]}
  />
);

export default () => {
  return (
    <Dropdown overlay={menu} placement="bottom">
      <Badge count={2}>
        <Avatar shape="square">wang</Avatar>
      </Badge>
    </Dropdown>
  );
};
