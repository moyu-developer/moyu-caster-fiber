import { Box } from "@/components/Box";
import {
  DownOutlined,
  SoundOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { css } from "@emotion/css";
import { Avatar, Button, Dropdown, Menu, Space, Image } from "antd";

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
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `12px 12px 0`,
    gap: 8
  }),
  title: css({
    fontSize: 19,
    fontWeight: 500
  }),
};

export const BrandTop = () => {
  return (
    <div className={classes.box}>
      <Image height={30} width={30} src="https://s2.loli.net/2022/12/04/CS2GplwyUNmqZ7J.png" />
      <div className={classes.title} >Lowcode Fiber</div>
    </div>
  );
};
