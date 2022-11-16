import {
  Collapse,
  CollapsePanelProps,
  Form,
  Slider,
  Select,
  Segmented,
  SegmentedProps,
} from "antd";
import { toFirstUpperCase } from "@/utils";
import { RemixIcon } from "@/atom/MoyuIcon";
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
  label: typeof k === 'string' ? toFirstUpperCase(k) : k,
  value: k,
}));

const FontAlignOptions: SegmentedProps["options"] = [
  {
    value: "left",
    icon: <RemixIcon type="icon-align-left" />,
  },

  {
    value: "center",
    icon: <RemixIcon type="icon-align-center" />,
  },

  {
    value: "right",
    icon: <RemixIcon type="icon-align-right" />,
  },

  {
    value: "justify",
    icon: <RemixIcon type="icon-align-justify" />,
  },
];

export const TypographyGroupSettings = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="TypographyGroupSetter" header="排版">
      <Form.Item
        label="字体大小"
        tooltip="设置字体大小，由于浏览器限制，最低设置只能为10"
        name="fontSize"
      >
        <Slider min={10} max={188} />
      </Form.Item>

      <Form.Item
        label="字符间距"
        tooltip="字符间距对应letter-spacing属性"
        name="letterSpacing"
      >
        <Slider min={1} max={20} />
      </Form.Item>

      <Box
        width="100%"
        gridColumnGap={20}
        gridTemplateColumns="1fr 1fr"
        display="grid"
      >
        <Form.Item
          label="字体粗细"
          tooltip="字体粗细，对应CSS中的font-weight属性"
          name="fontWeight"
        >
          <Select placeholder="Normal" options={fontWeightOptions} />
        </Form.Item>
        <Form.Item
        label="对齐方式"
        name="textAlign"
        tooltip="对齐方式对应CSS中的text-align属性"
      >
        <Segmented options={FontAlignOptions} onResize={undefined} onResizeCapture={undefined}/>
      </Form.Item>
      </Box>
      
    </Collapse.Panel>
  );
};
