import { css } from "@emotion/css"
import { Typography, Image, Space } from "antd"

const styles = {
  logo: css({
    textAlign: "center"
  }),
  title: css({
    fontSize: 30,
    fontWeight: "bold"
  })
}

export const Logo = () => {
  return (
    <div className={styles.logo} >
      <Space align="center" direction="horizontal" >
      <Image preview={false} height={62} width={62} src="https://gw.alipayobjects.com/zos/bmw-prod/735cefc9-f976-4c87-8b48-85f713f5b713.svg" />
      <h3 className={styles.title} >CASTER FIBER</h3>
      </Space>
    </div>
  )
}