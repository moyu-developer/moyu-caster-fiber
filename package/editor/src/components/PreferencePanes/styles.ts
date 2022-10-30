import { css } from "@emotion/css"
import { theme } from "antd"

export default () => {

  const { token } = theme.useToken()

  return {
    panels: css({
      height: '100vh',
      display: "grid",
      gridTemplateRows: "45px 1fr",
      border: `1px solid ${token.colorBorderSecondary}`,
    }),
    title: css({
      padding: token.paddingSM,
      fontWeight: 500,
      borderBottom: `1px solid ${token.colorBorderSecondary}`
    })
  }
}