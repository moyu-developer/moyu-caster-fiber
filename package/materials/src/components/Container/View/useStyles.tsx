import { css } from "@emotion/css"

export const useStyles = () => {
  return ({
    active: css({
      border: `1px solid blue`,
      
    }),
    hover: css({
      border: `1px solid blue`,
    })
  })
}