import { css } from "@emotion/css"

export const useStyles = () => {
  return ({
    side: css({
      height: '100%',
      width: "100%",
      background: '#fafafa',
      display: `grid`,
      gridTemplateRows: `52px 48px 1fr 40px`
    })
  })
}