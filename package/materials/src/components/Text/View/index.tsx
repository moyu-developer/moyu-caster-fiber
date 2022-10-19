import React, { FunctionComponent, useEffect, useState } from "react";
import { useNode } from '@craftjs/core'

export interface MaterialFunctionComponent<P= any> extends FunctionComponent<P> {
  craft?: any
}


export interface TextProps {
  text?: string;
  fontSize?: string;
  textAlign?: React.CSSProperties["textAlign"];
}

export const Text: MaterialFunctionComponent<TextProps> = ({text, fontSize, textAlign}) => {
  const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode, actions: {setProp} } = useNode((state) => {
    return ({
      hasSelectedNode: state.events.selected,
      hasDraggedNode: state.events.dragged,
    })
  });

  const [editable, setEditable] = useState(false);

  useEffect(() => {!hasSelectedNode && setEditable(false)}, [hasSelectedNode]);
  
  return (
      <div style={{
        fontSize,
        textAlign
      }} ref={ref => connect(drag(ref as HTMLElement))} >
        {text}
      </div>
  )
}