import { Space, Segmented } from "antd"
import { MobileOutlined, TabletOutlined, DesktopOutlined } from '@ant-design/icons'

export const Window = () => {
  return (
    <Space>
      <Segmented options={[
      {
        value: "desktop",
        icon: <DesktopOutlined />
      },
      {
        value: 'Pad',
        icon: <TabletOutlined />
      },
      {
        value: 'Mobile',
        icon: <MobileOutlined />
      },
    ]} />
    </Space>
  )
}