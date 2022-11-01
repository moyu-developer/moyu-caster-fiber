import React, { FunctionComponent, useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import {selectedStyles} from '@/extra/SelectedNode'
import cs from 'classnames'

export interface MaterialFunctionComponent<P = any>
  extends FunctionComponent<P> {
  craft?: any;
}

export interface TextProps {
  text?: string;
  style?: React.CSSProperties
}

export const Text: MaterialFunctionComponent<TextProps> = ({
  text = "文字",
  ...props
}) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    isHovered,
    actions: { setProp },
  } = useNode((state) => {
    return {
      hasSelectedNode: state.events.selected,
      hasDraggedNode: state.events.dragged,
      isHovered: state.events.hovered,
    };
  });

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <div
      style={props.style}
      className={cs({
        [selectedStyles?.border]: hasSelectedNode,
        [selectedStyles?.hover]: isHovered && !hasSelectedNode
      })}
      // className={hasSelectedNode ? selectedStyles?.border : undefined}
      ref={(ref) => connect(drag(ref as HTMLElement))}
    >
    {text}
    </div>
  );
};
