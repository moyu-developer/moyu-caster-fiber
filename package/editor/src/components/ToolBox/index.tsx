import { Actions } from './Actions'
import { Save } from './Save'
import { Window } from './Window'
import { useStyles } from "./useStyles"

export const Toolbox = () => {

  const styles = useStyles()

  return (
    <div className={styles.toolbox} >
      <Actions/>
      <Window/>
      <Save/>
    </div>
  )
}