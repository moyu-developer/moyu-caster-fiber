import { css } from "@emotion/css"

export const useStyles = () => {
  return ({
    login: css({
      height: "100vh",
      display: "flex",
    }),
    brand: css({
      flex: 1,
    }),
    form: css({
      flex: 1,
      display: "flex",
      alignItems: "center",
    })
  })
}