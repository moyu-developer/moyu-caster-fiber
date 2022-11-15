import { css } from "@emotion/css";
import { Collapse, CollapsePanelProps, Form, Slider, Select } from "antd";
import { Box } from "@/atom/Box";

export const fontWeightOptions = [
  400,
  500,
  600,
  700,
  800,
  900,
  `bold`,
  `nor`,
].map((k) => ({
  label: k,
  value: k,
}));

export const TypographyGroupSetter = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="TypographyGroupSetter" header="排版">
      <Form.Item
        label="字体大小"
        tooltip="设置字体大小，由于浏览器限制，最低设置只能为10"
        name="fontSize"
      >
        <Slider min={10} max={188} />
      </Form.Item>

      <Box gridColumnGap={20} gridTemplateColumns="1fr 1fr" display="grid" >
        <Form.Item
          label="字体粗细"
          tooltip="字体粗细，对应CSS中的font-weight属性"
          name="fontWeight"
        >
          <Select
            placeholder="请选择字体粗细大小"
            options={fontWeightOptions}
          />
        </Form.Item>
        <Form.Item
          label="字体粗细"
          tooltip="字体粗细，对应CSS中的font-weight属性"
          name="fontWeight"
        >
          <Select
            placeholder="请选择字体粗细大小"
            options={fontWeightOptions}
          />
        </Form.Item>
      </Box>
    </Collapse.Panel>
  );
};
