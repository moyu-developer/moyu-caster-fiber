import { useNode } from "@craftjs/core";
import { FunctionComponent, ReactNode } from "react";
import { Box } from '@/atom/Box'
import { useStyles } from './useStyles'

export interface MaterialFunctionComponent<P = any>
  extends FunctionComponent<P> {
  craft?: any;
}

export interface ContainerProps extends React.CSSProperties {
  children?: ReactNode;
  height?: React.CSSProperties["height"];
  style?: React.CSSProperties;
}

export const Container: MaterialFunctionComponent<ContainerProps> = ({
  children,
  width,
  ...styledProps
}) => {
  console.log(width, 'width')
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
