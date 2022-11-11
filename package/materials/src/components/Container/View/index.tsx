import { useNode } from "@craftjs/core";
import { FunctionComponent, ReactNode } from "react";
import { Box } from '@/atom/Box'
import { useStyles } from './useStyles'

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
  ...styledProps
}) => {
  const styles = useStyles()
  const {
    connectors: { connect, drag },
  } = useNode((state) => {
    return {
      selected: state.events.selected,
      dragged: state.events.dragged,
    };
  });

  return (
    <Box
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
      {...styledProps}
    >
      {children}
    </Box>
  );
};
