import { Editor } from '@craftjs/core';
import * as React from 'react';

export interface EditorProviderProps {
  children?: React.ReactNode
}

export const EditorContext = React.createContext({})

export const EditorProvider = (props: EditorProviderProps) => {
  return (
    <EditorContext.Provider value={111} >
      <Editor>
        {props.children}
      </Editor>
    </EditorContext.Provider>
  )
}