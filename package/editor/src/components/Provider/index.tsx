import { Editor } from '@craftjs/core';
import * as React from 'react';
import * as MaterialsData from '@caster-fiber/materials'

export interface EditorProviderProps {
  children?: React.ReactNode
}

export const EditorContext = React.createContext({})

export const EditorProvider = (props: EditorProviderProps) => {
  return (
    <EditorContext.Provider value={111} >
      <Editor resolver={MaterialsData} >
        <div style={{height: "100vh"}} >
        {props.children}
        </div>
      </Editor>
    </EditorContext.Provider>
  )
}