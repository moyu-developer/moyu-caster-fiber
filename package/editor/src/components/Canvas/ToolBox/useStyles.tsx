import { theme } from 'antd'
import { css } from "@emotion/css"

const { useToken }  = theme

export const useStyles = () => {

  const { token } = useToken()

  return ({
    toolbox: css({
      height: 45,
      background: token.colorBgBase,
      display: "flex",
      alignItems: "center",
      padding: `0 ${token.paddingSM}px`,
    })
  })
}