import { Space, Segmented, SegmentedProps } from "antd"
import { MobileOutlined, TabletOutlined, DesktopOutlined } from '@ant-design/icons'
import { useWindowSize } from '@/state/useWindow'

const SegmentedWindowMap = {
  desktop: 1080,
  mobile: 375,
  pad: 800
}

export const Window = () => {
  const windowSizeState = useWindowSize()

  const options = [
    {
      value: "desktop",
      size: 1080,
      icon: <DesktopOutlined />
    },
    {
      value: 'pad',
      size: 800,
      icon: <TabletOutlined />
    },
    {
      value: 'mobile',
      size: 375,
      icon: <MobileOutlined />
    },
  ]

  const handleWindowSizeChange: SegmentedProps['onChange'] = (value) => {
    const item = options.find(v => v.value === value)
    if (item) {
      windowSizeState.onChange(item.size, item.value)
    }
  }

  return (
    <Space>
      <Segmented value={windowSizeState.type} onChange={handleWindowSizeChange} options={options} onResize={undefined} onResizeCapture={undefined} />
    </Space>
  )
}