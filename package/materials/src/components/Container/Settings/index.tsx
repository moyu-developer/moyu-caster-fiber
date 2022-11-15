import { ContainerSetter } from '@/setter/ContainerSetter'
import { SpaceGroupSetter } from '@/reference/SpaceGroup'
import { TypographyGroupSetter } from '@/reference/TypographyGroup'
import { Collapse } from 'antd'

export const Settings = () => {
  return (
    <Collapse>
      <ContainerSetter/>
      <SpaceGroupSetter/>
      <TypographyGroupSetter/>
    </Collapse>
  )
}