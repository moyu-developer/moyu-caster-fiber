import { notification } from "antd"

export const systemErrorNotification = (msg: string) => {
  notification.error({
    message: '系统错误',
    description: msg
  })
}