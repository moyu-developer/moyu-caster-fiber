import { SpaceGroupSettings } from '@/reference/SpaceGroup'
import { TypographyGroupSettings } from '@/reference/TypographyGroup'
import { LayoutGroupSettings } from '@/reference/LayoutGroup'
import { Collapse } from 'antd'

export const Settings = () => {
  return (
    <Collapse>
      <SpaceGroupSettings/>
      <TypographyGroupSettings/>
      <LayoutGroupSettings/>
    </Collapse>
  )
}