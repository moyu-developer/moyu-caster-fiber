import { css } from "@emotion/css"
import { theme } from "antd"


const { useToken } = theme

export default () => {

  const { token } = useToken()

  return ({
    list: css({
      height: '100%',
      // display: "grid",
      // gridTemplateRows: "1fr",
      border: `1px solid ${token.colorBorderSecondary}`,
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