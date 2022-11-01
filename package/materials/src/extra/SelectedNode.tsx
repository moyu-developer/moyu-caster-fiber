import { ReactElement, ReactNode } from "react";
import { css } from '@emotion/css'

export interface SelectedNodeProps {
  hasSelected?: boolean;
  children: ReactNode
}


export const selectedStyles = {
  border: css({
    border: `2px solid blue`,
  }),
  hover: css({
    border: `2px dashed blue`,
  })
}

export const SelectedNode = (props: SelectedNodeProps) => {
  if (props.hasSelected) {
    return <div className={selectedStyles.border} >{props.children}</div>
  }

  return props.children as ReactElement
}