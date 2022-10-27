import { css } from "@emotion/css"
import { theme } from 'antd'

const { useToken } = theme

export const useStyles = () => {
  const { token } = useToken()
  return ({
    layout: css({
      display: "grid",
      gridTemplateColumns: `1fr 1fr 1fr`,
      gap: token.sizeSpaceXS
    })
  })
}