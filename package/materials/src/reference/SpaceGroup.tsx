import { Collapse, CollapsePanelProps, Form, Space, InputNumber } from "antd";

const SpaceTextMap = [
  {
    match: "Top",
    value: "上",
  },
  {
    match: "Right",
    value: "右",
  },
  {
    match: "Bottom",
    value: "下",
  },
  {
    match: "Left",
    value: "左",
  },
];

export const SpaceGroupSettings = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="SpaceGroupSetter" header="间距">
      <Form.Item label="Margin" tooltip="外边距设置">
        <Space.Compact block>
          {["marginTop", "marginRight", "marginBottom", "marginLeft"].map(
            (key) => {
              const label = SpaceTextMap.find((v) => key.includes(v.match));
              return (
                <Form.Item key={key} noStyle name={key}>
                  <InputNumber<string>
                    controls={false}
                    placeholder={label?.value}
                    formatter={(value: string | undefined) => value ? `${value}px` : ''}
                    parser={(value: string | undefined) => value!.replace("px", "")}
                  />
                </Form.Item>
              );
            }
          )}
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Padding" tooltip="内边距设置">
        <Space.Compact block>
          {["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"].map(
            (key) => {
              const label = SpaceTextMap.find((v) => key.includes(v.match));
              return (
                <Form.Item key={key} noStyle name={key}>
                  <InputNumber<string>
                    controls={false}
                    placeholder={label?.value}
                    formatter={(value: string | undefined) => value ? `${value}px` : ''}
                    parser={(value: string | undefined) => value!.replace("px", "")}
                  />
                </Form.Item>
              );
            }
          )}
        </Space.Compact>
      </Form.Item>
    </Collapse.Panel>
  );
};
