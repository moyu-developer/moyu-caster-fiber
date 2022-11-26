import { css, CSSInterpolation } from '@emotion/css'
import { theme } from 'antd'

const { useToken } = theme

export default () => {
  const { token } = useToken()

  return {
    layout: css({
      height: "100vh",
    }),
    content: css({
      padding: `25px 35px`,
      display: 'grid',
      gridTemplateRows: `35px 1fr`,
      background: token.colorWhite
    })
  }
}