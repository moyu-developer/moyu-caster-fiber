import { css, CSSInterpolation } from '@emotion/css'
import { theme } from 'antd'

const { useToken } = theme

export default () => {
  const { token } = useToken()

  return {
    layout: css({
      height: "100vh",
    }),
    header: css({
      display: "flex",
      alignItems: "center",
      height: 60,
      padding: `0 60px`,
      background: token.colorBgBase
    }),
    menu: css({
      flex: 1,
    }),
    logo: css({
      fontSize: token.fontSizeHeading4,
      margin: `16px 24px 16px 0`,
      fontWeight: token.fontWeightStrong
    }),
    content: css({
      height: "100%",
      overflow: "auto",
      display: "grid",
      gridTemplateRows: "38px 1fr",
      padding: '20px 60px'
    }),
    body: css({
      background: token.colorBgBase,
    })
  }
}