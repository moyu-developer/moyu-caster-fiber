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
      paddingBottom: 24,
      display: 'grid',
      gridTemplateRows: `60px 1fr`,
    }),
    header: css({
      height: 60,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0 35px`,
    }),
    icon: css({
      fontSize: 18,
      color: token.colorTextSecondary
    }),
    title: css({
      fontSize: token.fontSizeLG,
      fontWeight: token.fontWeightStrong,
    }),
    outlet: css({
      height: '100%',
      overflow: 'auto',
      padding: `0 35px`
    })
  }
}