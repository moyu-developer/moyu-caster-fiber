import { Space } from "antd"
import { Actions } from './Actions'
import { Save } from './Save'
import { useStyles } from "./useStyles"

export const Toolbox = () => {

  const styles = useStyles()

  return (
    <div className={styles.toolbox} >
      <Space>
        <Actions/>
      </Space>
      <Save/>
    </div>
  )
}