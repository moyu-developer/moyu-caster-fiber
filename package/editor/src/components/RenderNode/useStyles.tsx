import { css } from "@emotion/css"
import { theme } from 'antd'

export const useStyles = () => {

  const { token } = theme.useToken()

  return ({
    
    portal: css({
      position: "fixed",
      height: 30,
      marginTop: -29,
      fontSize: 12,
      padding: `0 ${token.paddingSM}px`,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      background: token.colorPrimary,
      color: token.colorBgBase,
    }),
    selected: css({
      '&::after': {
        border: `1px solid ${token.colorPrimary} !important`,
      }
    }),
    hovered: css({
      position: "relative",
      '&::after': {
        content: '""',
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        border: `1px dashed ${token.colorPrimary}`,
      }
    })
  })
}