import {
  Collapse,
  CollapsePanelProps,
  Form,
  Slider,
  Select,
  InputNumber,
} from "antd";
import { ColorSetter } from "@/setter/ColorSetter";
import { InputNumberSetter } from "@/setter/InputNumberSetter";
import { Box } from "@/atom/Box";

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
    </Collapse.Panel>
  );
};
