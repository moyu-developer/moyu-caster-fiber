import { css } from "@emotion/css"
import { theme } from 'antd'

const { useToken } = theme

export const useStyles = () => {
  
  const { token } = useToken()

  return ({
    wrap: css({
      height: "100%",
      background: token.colorBgContainerDisabled,
      display: "grid",
      gridTemplateRows: '45px 1fr'
    }),
    canvas: css({
      height: "100%",
      width: '100%',
      padding: `30px ${token.paddingSM}px`,
    }),
    toolbox: css({}),

    action: css({})
  })
}