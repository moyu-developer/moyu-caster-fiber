import * as React from "react";
import {
  Card,
  Layout,
  theme,
  Collapse,
  Button,
  Typography,
  Tooltip,
} from "antd";
import { PlusOutlined, CodeOutlined } from "@ant-design/icons";
import { ProjectMoreAction } from "./more";
import { ProjectPageList } from "./page";
import { ViewData } from "./view-data";
import { NodeTree } from "./node-tree";
import { css } from "@emotion/css";

export function Left(): JSX.Element {
  const { token } = theme.useToken();

  const panelStyle = {};

  return (
    <Layout.Sider width={300} theme="light">
      <Card
        style={{
          boxShadow: "none",
        }}
        bodyStyle={{
          padding: 0,
          margin: 0,
        }}
        size="small"
        bordered={false}
        title="http://localhost:10007"
        extra={<ProjectMoreAction />}
      >
        <Collapse destroyInactivePanel bordered={false} ghost defaultActiveKey={["1"]}>
          <Collapse.Panel
            collapsible="header"
            extra={[
              <Tooltip
                title="点击按钮可以创建新的页面视图，您需要保存好当前的页面内容，以防止丢失。"
                placement="bottom"
              >
                <Button
                  type="text"
                  size="small"
                  icon={<PlusOutlined />}
                ></Button>
              </Tooltip>,
            ]}
            header="页面"
            key="2"
            style={panelStyle}
          >
            <ProjectPageList />
          </Collapse.Panel>
          <Collapse.Panel
            collapsible="header"
            header="组件"
            key="3"
            extra={[<ViewData />]}
            style={panelStyle}
          >
            <NodeTree />
          </Collapse.Panel>
        </Collapse>
      </Card>
    </Layout.Sider>
  );
}
