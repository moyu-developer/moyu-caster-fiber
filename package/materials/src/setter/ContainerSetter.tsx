import { Collapse, CollapsePanelProps, Form, Select, Row, Col } from "antd";
import { toFirstUpperCase } from "@/utils";
import { ColorSetter } from "./ColorSetter";

const OverflowOptions = ["auto", "scroll", "hidden", "visible"].map((v) => ({
  label: toFirstUpperCase(v),
  value: v,
}));

export const ContainerSetter = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="fontSetter" header="布局" showArrow={false}>
      <Form.Item label="Overflow">
        <Row>
          <Col span={12}>
            <Form.Item noStyle>1</Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item noStyle>
              <Select
                defaultValue="auto"
                bordered={false}
                options={OverflowOptions}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item rules={[
              {
                pattern: /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/,
                message: "您输入的内容不符合HEX颜色规则"
              }
            ]} label="背景颜色" name="color">
              <ColorSetter />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
    </Collapse.Panel>
  );
};
