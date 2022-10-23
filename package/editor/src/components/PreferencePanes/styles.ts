import { css } from "@emotion/css"
import { theme } from "antd"

export default () => {

  const { token } = theme.useToken()

  return {
    panels: css({
      height: '100vh',
      border: `1px solid ${token.colorBorderSecondary}`
    })
  }
}