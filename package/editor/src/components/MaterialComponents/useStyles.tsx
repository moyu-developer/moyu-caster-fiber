import { css } from "@emotion/css"
import { theme } from "antd"


const { useToken } = theme

export default () => {

  const { token } = useToken()

  return ({
    list: css({
      width: 232,
      padding: token.paddingXS
    })
  })
}