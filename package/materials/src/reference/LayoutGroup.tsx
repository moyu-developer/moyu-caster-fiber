import { Collapse, CollapsePanelProps, Form, Segmented, Select } from "antd";
import { ColorSetter } from "@/setter/ColorSetter";
import { InputNumberSetter } from "@/setter/InputNumberSetter";
import { Box } from "@/atom/Box";
import { toFirstUpperCase } from "@/utils";
import { RemixIcon } from "@/atom/MoyuIcon";

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
    <Collapse.Panel {...props} key="TypographyGroupSetter" header="布局">
      <Form.Item
        label="背景颜色"
        name="backgroundColor"
        rules={[
          {
            pattern: /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/,
            message: "您输入的内容不符合HEX颜色规则",
          },
        ]}
      >
        <ColorSetter />
      </Form.Item>
      <Box
        width="100%"
        gridColumnGap={20}
        gridTemplateColumns="1fr 1fr"
        display="grid"
      >
        <Form.Item label="宽度" name="width">
          <InputNumberSetter addonAfter="%" min={0} max={100} width="100%" />
        </Form.Item>

        <Form.Item label="高度" name="height">
          <InputNumberSetter precision={2} min={0} width="100%" />
        </Form.Item>
      </Box>
      <Form.Item noStyle label="overflowX">
        <Box width="100%" display="flex" justifyContent="space-between">
          <Form.Item name="overflowX">
            <Segmented
              options={OverflowSegmented}
              onResize={undefined}
              onResizeCapture={undefined}
            />
          </Form.Item>

          <Form.Item name="overflowX">
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
          <Form.Item name="overflowY">
            <Segmented
              options={OverflowSegmented}
              onResize={undefined}
              onResizeCapture={undefined}
            />
          </Form.Item>

          <Form.Item name="overflowY">
            <Select
              bordered={false}
              defaultValue="auto"
              options={OverflowOptions}
            />
          </Form.Item>
        </Box>
      </Form.Item>
    </Collapse.Panel>
  );
};
