import React, { useContext } from "react";
import { css } from "@emotion/css";
import { List, Collapse, Typography, theme, Button, Tag } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { EditorContext } from "../Provider";
import { useEditorData } from "@/state/useEditorData";

const classes = {
  record: css({
    display: "flex",
    justifyContent: "flex-start",
  }),
};

export const PageTable = () => {
  const { token } = theme.useToken();
  const { getRoutes, routes, data } = useEditorData();
  const context = useContext(EditorContext);

  React.useEffect(() => {
    if (context?.wID) {
      getRoutes(context?.wID);
    }
  }, [context?.wID]);

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
            <div className={classes.record}>
              <Typography.Paragraph
                key={item}
                style={{
                  color: token.colorLink,
                  cursor: "pointer",
                  flex: 1,
                }}
                ellipsis
                onClick={() =>
                  window.open(`/editor/${context?.wID}/${item.id}`)
                }
              >
                {item.route}
              </Typography.Paragraph>
              {data?.route === item.route ? (
                <div>
                  <Tag color="processing">当前路由</Tag>
                </div>
              ) : null}
            </div>
          )}
        />
      </Collapse.Panel>
    </Collapse>
  );
};
