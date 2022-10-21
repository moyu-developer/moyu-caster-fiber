import { Editor } from "@craftjs/core"
import { ReactNode } from "react"

export interface PreferencePanesProps {
  children?: ReactNode
}

export const PreferencePanes = (props: PreferencePanesProps) => {
  return (
    <Editor>
      {props.children}
    </Editor>
  )
}