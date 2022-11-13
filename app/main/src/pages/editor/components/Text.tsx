// components/user/Text.js
import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";

import ContentEditable from 'react-contenteditable'

export interface TextProps {
  [k: string]: any
}

export const Text = ({text, fontSize, textAlign}: TextProps) => {
  const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode, actions: {setProp} } = useNode((state) => {
    return ({
      hasSelectedNode: state.events.selected,
      hasDraggedNode: state.events.dragged,
    })
  });

  const [editable, setEditable] = useState(false);

  useEffect(() => {!hasSelectedNode && setEditable(false)}, [hasSelectedNode]);
  
  return (
      <div ref={ref => connect(drag(ref as any))} >
         <ContentEditable

        disabled={!editable}
        html={text} 
        onClick={e => setEditable(true)}
        onChange={e => 
          setProp((props: any) => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="p"
        style={{fontSize: `${fontSize}px`, textAlign}}
      />
      </div>
  )
}

const TextSettings = () => {
  return (
    111
  )
}

Text.craft = {
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag",
  },
  related: {
    settings: TextSettings
  }
}