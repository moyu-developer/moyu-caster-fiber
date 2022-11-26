import { Box } from "@/components/Box";
import {
  DownOutlined,
  SoundOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { css } from "@emotion/css";
import { Avatar, Button, Dropdown, Menu, Space, Typography } from "antd";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);

const classes = {
  box: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `12px 12px 0`,
  }),
  title: css({
    fontSize: 20,
    fontWeight: "500"
  }),
};

export const BrandTop = () => {
  return (
    <div className={classes.box}>
      <div className={classes.title}>Fiber</div>
      <Dropdown overlay={menu}>
        <Space size={4}>
              <Avatar shape="square" src="https://joeschmoe.io/api/v1/random" size="small" />
              <DownOutlined style={{ fontSize: 10, fontWeight: "bold" }} />
            </Space>
        </Dropdown>
    </div>
  );
};
