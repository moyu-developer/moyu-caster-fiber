import { Card, Collapse, Space } from "antd";
import { ContainerSizeSetter } from "@/setter/container-size";
import { LayoutGroupSettings } from '@/reference/LayoutGroup'

export default function () {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <ContainerSizeSetter />
      <LayoutGroupSettings/>
    </Space>
  );
}
