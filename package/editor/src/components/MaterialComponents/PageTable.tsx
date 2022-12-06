import { List, Collapse, Typography, theme, Button, Space } from "antd";
import { AppstoreAddOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";

const data = [
  "/home.html",
  "/activity.html",
  "/category.html",
  "/cart.html",
  "/my.html",
];
export const PageTable = () => {
  const { token } = theme.useToken();

  return (
    <Collapse bordered={false}>
      <Collapse.Panel
        key="Page"
        header="路由"
        extra={
          <Button type="link" size="small" icon={<AppstoreAddOutlined />} />
        }
      >
        <List
          size="small"
          bordered={false}
          dataSource={data}
          itemLayout="vertical"
          renderItem={(item) => (
            <Typography.Paragraph
                key={item}
                style={{
                  color: token.colorLink,
                  cursor: "pointer",
                }}
                ellipsis
              >
                {item}
              </Typography.Paragraph>
          )}
        />
      </Collapse.Panel>
    </Collapse>
  );
};
