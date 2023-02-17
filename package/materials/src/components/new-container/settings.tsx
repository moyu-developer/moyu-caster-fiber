import { Card, Collapse } from "antd";
import { ContainerSizeSetter } from '@/setter/container-size'

export default function () {
  return (
    <Collapse bordered={false} >
      <ContainerSizeSetter/>
    </Collapse>
  )
}