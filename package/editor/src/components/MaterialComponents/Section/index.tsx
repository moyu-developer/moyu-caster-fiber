import * as React from 'react';
import * as MaterialsData from '@caster-fiber/materials'
import { MaterialItem } from '../Item'
import { useEditor } from '@craftjs/core';
import { useStyles } from './useStyles';

export const MaterialSection = () => {


  const { connectors } = useEditor();
  const { layout } = useStyles()

  return (
    <div className={layout} >
      {
        Object.keys(MaterialsData).map((key: string) => {
          const dataKey = key as "Container" | "Text"
          const Material: any = MaterialsData?.[dataKey]
          return (
            <MaterialItem key={key} ref={ref=> connectors.create(ref as HTMLElement, React.createElement(Material))} text={key}  />
          )
        })
      }
    </div>
  )
}