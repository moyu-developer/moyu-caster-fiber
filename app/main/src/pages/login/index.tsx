import { Col, Layout, Row } from 'antd'
import { LoginForm } from './LoginForm'
import { useStyles } from './useStyles'

export default () => {

  const styles = useStyles()

  return (
    <Row wrap={false} className={styles.login} >
      <Col flex="auto" >1</Col>
      <Col flex="none" >
        <div className={styles.form} >
          <LoginForm/>
        </div>
      </Col>
    </Row>
  )
}