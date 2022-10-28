import { useEditor, Element } from '@craftjs/core';
import { Button, Space } from 'antd';
import { Button as MaterialButton } from '../components/Button'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import SetterRender from '../SetterRender'
import * as React from 'react';

export const Toolbox = () => {

  const { connectors, query } = useEditor();

  return (
    <Space direction="vertical" >
      <Button ref={ref=> connectors.create(ref as HTMLElement, <MaterialButton  size="small" >111</MaterialButton>)} >Button</Button>
      <Button ref={ref=> connectors.create(ref as HTMLElement, <Text text="Hi world" />)} >Text</Button>
      <Button ref={ref=> connectors.create(ref as HTMLElement, <Element is={Container} background="red" padding={20} canvas />)}  >Container</Button>
      <SetterRender/>
    </Space>
  )
};