import { ContainerSetter } from '@/setter/ContainerSetter'
import { SpaceGroupSetter } from '@/reference/SpaceGroup'
import { Collapse } from 'antd'

export const Settings = () => {
  return (
    <Collapse>
      <ContainerSetter/>
      <SpaceGroupSetter/>
    </Collapse>
  )
}