import { css, CSSInterpolation } from '@emotion/css'
import { theme } from 'antd'

const { useToken } = theme

export default () => {
  const { token } = useToken()

  return {
    layout: css({
      height: "100vh",
      background: token.colorBgBase
    }),
    content: css({
      padding: `24px 0 24px 0`,
      display: 'grid',
      gridTemplateRows: `35px 1fr`,
    }),
    title: css({
      fontSize: token.fontSizeLG,
      fontWeight: token.fontWeightStrong,
      padding: `0 35px`,
    }),
    outlet: css({
      height: '100%',
      overflow: 'auto',
      padding: `0 35px`
    })
  }
}