import { Col, Collapse, CollapsePanelProps, Form, InputNumber, Row, Slider, SelectProps, Select } from "antd";
import { toFirstUpperCase } from '@/utils'

const FontAlignOptions: SelectProps['options'] = ["left", "right", "center", "justify", "justify-all", "start", "end", "match-parent"].map(v=> ({
  label: toFirstUpperCase(v),
  value: v
}))

const FontWeightOptions: SelectProps["options"] = ["weight", "bold", "lighter", "bolder"].map(v => ({
  label: toFirstUpperCase(v),
  value: v
}))

export const FontSetter = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="fontSetter" header="排版" showArrow={false}>
      <Form.Item
        label="字体大小"
        tooltip="设置字体大小，由于浏览器限制，最低设置只能为10"
        name={["style", "fontSize"]}
      >
        <Slider min={10} max={50} />
      </Form.Item>
      <Row gutter={20} >
        <Col span={12} >
         <Form.Item label="字体排列" tooltip="字体排列，对应CSS中的text-align属性">
            <Select placeholder="请选择字体排列方式" options={FontAlignOptions} />
         </Form.Item>
        </Col>
        <Col span={12} >
         <Form.Item label="字体粗细" tooltip="字体粗细，对应CSS中的font-weight属性">
            <Select placeholder="请选择字体粗细大小" options={FontAlignOptions} />
         </Form.Item>
        </Col>
        <Col span={12} >
         <Form.Item label="字号间距" >
         <InputNumber prefix="em" style={{ width: '100%' }} />
         </Form.Item>
        </Col>
        <Col span={12} >
         <Form.Item label="段落行号" ><InputNumber prefix="px" style={{ width: '100%' }} />
         </Form.Item>
        </Col>
      </Row>
    </Collapse.Panel>
  );
};
