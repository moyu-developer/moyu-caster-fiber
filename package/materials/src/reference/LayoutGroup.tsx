import { Collapse, CollapsePanelProps, Form, Segmented, Select } from "antd";
import { ColorSetter } from "@/setter/ColorSetter";
import { Box } from "@/atom/Box";
import { toFirstUpperCase } from "@/utils";
import { RemixIcon } from "@/atom/MoyuIcon";
import { SetterContainer } from "@/atom/collapse";
import { ProFormText, ProFormSegmented } from '@ant-design/pro-components'

const OverflowOptions = ["auto", "scroll", "hidden", "visible"].map((v) => ({
  label: toFirstUpperCase(v),
  value: v,
}));

const OverflowSegmented = [
  {
    value: "auto",
    icon: <RemixIcon type="icon-sticky-note-line" />,
  },

  {
    value: "visible",
    icon: <RemixIcon type="icon-eye-line" />,
  },
  {
    value: "hidden",
    icon: <RemixIcon type="icon-eye-off-line" />,
  },

  {
    value: "scroll",
    icon: <RemixIcon type="icon-fridge-fill" />,
  },
];

export const fontWeightOptions = [
  400,
  500,
  600,
  700,
  800,
  900,
  `bold`,
  `normal`,
].map((k) => ({
  label: k,
  value: k,
}));

export const LayoutGroupSettings = (props: Partial<CollapsePanelProps>) => {
  return (
    <SetterContainer header="容器" >
      <Form.Item
        label="背景颜色"
        name={["style", "backgroundColor"]}
        rules={[
          {
            pattern: /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/,
            message: "您输入的内容不符合HEX颜色规则",
          },
        ]}
      >
        <ColorSetter />
      </Form.Item>
      <Form.Item label="overflowX">
        <Box width="100%" display="flex" justifyContent="space-between">
          <Form.Item noStyle name="overflowX">
            <Segmented
              options={OverflowSegmented}
            />
          </Form.Item>

          <Form.Item noStyle name="overflowX">
            <Select
              bordered={false}
              defaultValue="auto"
              options={OverflowOptions}
            />
          </Form.Item>
        </Box>
      </Form.Item>
      <Form.Item label="overflowY">
        <Box width="100%" display="flex" justifyContent="space-between">
          <Form.Item noStyle name="overflowY">
            <Segmented
              options={OverflowSegmented}
            />
          </Form.Item>

          <Form.Item noStyle name="overflowY">
            <Select
              bordered={false}
              defaultValue="auto"
              options={OverflowOptions}
            />
          </Form.Item>
        </Box>
      </Form.Item>
      </SetterContainer>
  );
};
