import { css } from "@emotion/css"

export const useStyles = () => {
  return ({
    login: css({
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      flexDirection: "column",
    }),
    card: css({
      marginBottom: 24,
      padding: `46px 48px`,
      borderRadius: 10,
      boxShadow: `0 4px 8px -4px rgb(0 0 0 / 13%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 12px 24px 16px rgb(0 0 0 / 4%)`,
    }),
    account: css({
      borderRadius: 10,
    })
  })
}