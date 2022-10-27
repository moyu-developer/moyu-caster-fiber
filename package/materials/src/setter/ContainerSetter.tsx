import { Collapse, CollapsePanelProps, Form, Select, Row, Col } from 'antd'
import { toFirstUpperCase } from '@/utils'

const OverflowOptions = ["auto", "scroll", "hidden", "visible"].map((v) => ({
  label: toFirstUpperCase(v),
  value: v
}))

export const ContainerSetter = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="fontSetter" header="布局" showArrow={false}>
      <Form.Item label="充满" >
        <Row>
        <Col span={12} >
          <Form.Item noStyle >
            1
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item noStyle >
            <Select bordered={false} options={OverflowOptions} />
          </Form.Item>
          </Col>
          
          
        </Row>
      </Form.Item>
    </Collapse.Panel>
  )
}