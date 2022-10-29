import { Collapse } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";
import { FontSetter } from '@/setter/FontSetter'
import { ContainerSetter } from '@/setter/ContainerSetter'

export const Settings = () => {
  return (
    <Collapse
      expandIconPosition="end"
      bordered={false}
      // expandIcon={({ isActive }) => (
      //   <CaretUpOutlined rotate={isActive ? 360 : 0} />
      // )}
    >
      <FontSetter/>
      <ContainerSetter/>
    </Collapse>
  );
};
