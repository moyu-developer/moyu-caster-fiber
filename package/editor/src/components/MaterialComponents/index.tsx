import * as React from 'react';
import { Avatar, Space, Card, Typography } from 'antd'
import { MaterialItem } from './Item'
import { useEditor } from '@craftjs/core';
import * as MaterialsData from '@caster-fiber/materials'
import useStyles from './useStyles'

export const MaterialComponents = () => {

  const styles = useStyles()
  const { connectors, query } = useEditor();

  return (
   <div className={styles.list} >
    <Typography.Title level={5} >组件列表</Typography.Title>
    <Space wrap >
      {
        Object.keys(MaterialsData).map((key) => {
          const Material = MaterialsData?.Text
          // <Button ref={ref=> connectors.create(ref as HTMLElement, <MaterialButton  size="small" >111</MaterialButton>)} >Button</Button>
          return (
            <MaterialItem ref={ref=> connectors.create(ref as HTMLElement, React.createElement(Material))} text={key}  />
          )
        })
      }
    </Space>
   </div>
  )
}