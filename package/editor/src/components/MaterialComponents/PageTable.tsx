import { List, Collapse, Typography, theme, Button, Space } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { EditorContext } from '../Provider'
import { useContext } from "react";
import React from "react";
import { useEditorData } from "@/state/useEditorData";

const data = [
  "/home",
  "/activity",
  "/category",
  "/cart",
  "/my",
];
export const PageTable = () => {
  const { token } = theme.useToken();
  const { getRoutes, routes } = useEditorData()
  const context = useContext(EditorContext)

  React.useEffect(() => {
    if (context?.wID) {
      getRoutes(context?.wID)
    }
  }, [context?.wID])

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
          dataSource={routes}
          itemLayout="vertical"
          renderItem={(item) => (
            <Typography.Paragraph
                key={item}
                style={{
                  color: token.colorLink,
                  cursor: "pointer",
                }}
                ellipsis
                onClick={() => window.open(`/editor/${context?.wID}/${item.id}`)}
              >
                {item.route}
              </Typography.Paragraph>
          )}
        />
      </Collapse.Panel>
    </Collapse>
  );
};
