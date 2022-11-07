import { Layout } from 'antd'
import { LoginForm } from './LoginForm'
import { useStyles } from './useStyles'

export default () => {

  const styles = useStyles()

  return (
    <div className={styles.login} >
      <div className={styles.brand} >

      </div>
      <div className={styles.form} >
        <LoginForm/>
      </div>
    </div>
  )
}