import { useNode } from "@craftjs/core";
import { FunctionComponent, ReactNode } from "react";
import { SelectedNode } from "@/extra/SelectedNode";

export interface MaterialFunctionComponent<P = any>
  extends FunctionComponent<P> {
  craft?: any;
}

export interface ContainerProps {
  children?: ReactNode;
  height?: React.CSSProperties["height"];
  style?: React.CSSProperties;
}

export const Container: MaterialFunctionComponent<ContainerProps> = ({
  children,
  height,
  style,
}) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    actions: { setProp },
  } = useNode((state) => {
    return {
      hasSelectedNode: state.events.selected,
      hasDraggedNode: state.events.dragged,
    };
  });

  return (
    <div
      style={{ height, background: "#FFF", ...style }}
      ref={(ref) => connect(drag(ref as HTMLElement))}
    >
      {children}
    </div>
  );
};
