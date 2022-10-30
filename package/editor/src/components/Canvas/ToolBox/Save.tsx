import { Button, Menu, Dropdown, Space, Typography } from "antd";
import { DownOutlined, SendOutlined } from "@ant-design/icons";
import { Fragment } from "react";

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
    ]}
  />
);

export const Save = () => {
  return (
    <Space>
      <Dropdown placement="bottomCenter" overlay={menu}>
        <Typography.Link>
          保存<DownOutlined/></Typography.Link>
      </Dropdown>
      <Button type="primary" icon={<SendOutlined />}>
        部署
      </Button>
    </Space>
  );
};
