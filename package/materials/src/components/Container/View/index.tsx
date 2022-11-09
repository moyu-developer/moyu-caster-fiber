import { useNode } from "@craftjs/core";
import { FunctionComponent, ReactNode } from "react";
import { useStyles } from './useStyles'
import cs from 'classnames'

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
  const styles = useStyles()
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => {
    return {
      selected: state.events.selected,
      dragged: state.events.dragged,
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
