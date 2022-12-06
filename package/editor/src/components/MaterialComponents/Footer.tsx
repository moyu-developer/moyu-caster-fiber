import { SettingOutlined, QuestionCircleOutlined, LockOutlined } from "@ant-design/icons"
import { Button, Space, theme } from "antd"

export const Footer = () => {

  const { token } = theme.useToken()

  return (
    <Space size={6} style={{
      padding: `0 12px`,
      borderTop: `1px solid ${token.colorBorderSecondary}`
    }} >
      <Button type="text" icon={<SettingOutlined />} />
      <Button type="text" icon={<QuestionCircleOutlined />} />
      <Button type="text" icon={<LockOutlined />} />
    </Space>
  )
}