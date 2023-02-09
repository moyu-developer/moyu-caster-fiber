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
import { Element, useEditor } from "@craftjs/core";
import {
  FileOutlined,
  SearchOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import * as MaterialResolve from "@caster-fiber/materials";

export function Materials() {
  const { token } = theme.useToken();
  const { connectors } = useEditor();

  const baseComponents = React.useMemo(() => {
    const materialOptions: Array<{
      key: string;
      value: any;
    }> = [];
    Object.keys(MaterialResolve).forEach((key) => {
      const indexes = key as keyof typeof MaterialResolve;
      const md = MaterialResolve?.[indexes];
      materialOptions.push({
        key,
        value: md,
      });
    });
    return materialOptions;
  }, [MaterialResolve]);

  return (
    <>
      <div
        className={css({
          paddingLeft: token.paddingSM,
          paddingRight: token.paddingSM,
          marginTop: token.marginSM,
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
          <Row gutter={[token.paddingXS, token.paddingSM]}>
            {baseComponents.map((option) => {
              let value = React.createElement(option.value);
              if (option.key === "Container") {
                value = <Element is={option.value} canvas />;
              }
              return (
                <Col
                  span={6}
                  key={option.key}
                  ref={(ref) => connectors.create(ref as HTMLElement, value)}
                >
                  <Space direction="vertical" align="center">
                    <Card hoverable size="small" className={css({})}>
                      <Avatar
                        shape="square"
                        size="large"
                        icon={<FileOutlined />}
                      />
                    </Card>
                    <Typography.Text type="secondary">
                      {option.value?.craft?.displayName}
                    </Typography.Text>
                  </Space>
                </Col>
              );
            })}
          </Row>
        </Collapse.Panel>
        <Collapse.Panel key="MARKETING" header="营销组件">
          <Row gutter={[token.paddingXS, token.paddingSM]}>
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
          <Row gutter={[token.paddingXS, token.paddingSM]}>
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
