import * as React from 'react';
import { Result, Button, ResultProps } from 'antd'
import { styles } from './styles'

export const EmptyResult: React.FC<ResultProps> = (props) => {
  return (
    <div className={styles.empty()} >
      <Result
    {...props}
  />
    </div>
  )
}

EmptyResult.defaultProps = {
  title: '暂无内容',
  subTitle: "暂无内容描述",
  status: "info"
}