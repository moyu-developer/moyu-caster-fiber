import * as React from "react";
import {
  Avatar,
  Card,
  Col,
  Space,
  Row,
  theme,
  Typography,
  Input,
  Divider,
  Collapse,
} from "antd";
import { css } from "@emotion/css";
import {
  FileOutlined,
  SearchOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

export function Materials() {
  const { token } = theme.useToken();

  return (
    <>
      <div
        className={css({
          paddingLeft: token.paddingSM,
          paddingRight: token.paddingSM,
          marginTop: token.marginSM
        })}
      >
        <Input prefix={<SearchOutlined />} placeholder="请输入搜索的组件名称" />
      </div>
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <Collapse.Panel key="BASE" header="基础组件">
          <Row
            gutter={[token.paddingXS, token.paddingSM]}
          >
            <Col span={6}>
              <Space direction="vertical" align="center">
                <Card hoverable size="small" className={css({})}>
                  <Avatar shape="square" size="large" icon={<FileOutlined />} />
                </Card>
                <Typography.Text type="secondary">TABLE</Typography.Text>
              </Space>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel key="MARKETING" header="营销组件">
          <Row
            gutter={[token.paddingXS, token.paddingSM]}
          >
            <Col span={6}>
              <Space direction="vertical" align="center">
                <Card hoverable size="small" className={css({})}>
                  <Avatar size="large" icon={<FileOutlined />} />
                </Card>
                <Typography.Text type="secondary">TABLE</Typography.Text>
              </Space>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel key="APPLET" header="平台控件">
          <Row
            gutter={[token.paddingXS, token.paddingSM]}
          >
            <Col span={6}>
              <Space direction="vertical" align="center">
                <Card hoverable size="small" className={css({})}>
                  <Avatar size="large" icon={<FileOutlined />} />
                </Card>
                <Typography.Text type="secondary">TABLE</Typography.Text>
              </Space>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    </>
  );
}
