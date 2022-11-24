import { css } from "@emotion/css"

export const useStyles = () => {
  return ({
    login: css({
      height: "100vh",
    }),
    form: css({
      height: '100%',
      display: "flex",
      alignItems: "center",
      padding: `0 30px`
    })
  })
}