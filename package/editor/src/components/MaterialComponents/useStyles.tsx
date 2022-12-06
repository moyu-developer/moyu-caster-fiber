import { css } from "@emotion/css"
import { theme } from "antd"


const { useToken } = theme

export default () => {

  const { token } = useToken()

  return ({
    panels: css({
      height: '100%',
      border: `1px solid ${token.colorBorderSecondary}`,
      display: "grid",
      gridTemplateRows: "1fr 50px"
    }),
    collapse: css({
      height: '100%',
      overflow: "auto",
    }),
    title: css({
      padding: token.paddingSM,
      fontWeight: 500,
      // borderBottom: `1px solid ${token.colorBorderSecondary}`
    }),
    segmented: css({
      padding: `6px 12px`
    })
  })
}