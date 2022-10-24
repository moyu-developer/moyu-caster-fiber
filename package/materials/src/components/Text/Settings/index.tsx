import { Collapse, CollapsePanelProps, Form, Input } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

export const Settings = () => {
  return (
    <Collapse
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <CaretUpOutlined rotate={isActive ? 360 : 0} />
      )}
      bordered={false}
    >
      <Collapse.Panel key="color" header="颜色设置">
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>
      </Collapse.Panel>
    </Collapse>
  );
};
