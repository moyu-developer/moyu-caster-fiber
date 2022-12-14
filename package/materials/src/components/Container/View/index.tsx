import { useNode, UserComponent } from "@craftjs/core";
import { FunctionComponent, ReactNode } from "react";
import { Resizer } from "./Resizable";

export interface MaterialFunctionComponent<P = any>
  extends FunctionComponent<P> {
  craft?: any;
}

export interface ContainerProps extends React.CSSProperties {
  children?: ReactNode;
  height?: React.CSSProperties["height"];
  style?: React.CSSProperties;
}

export const Container: UserComponent<ContainerProps> = ({
  children,
  width,
  ...styledProps
}) => {
  return (
    <Resizer propKey={{ width: "width", height: "height" }} style={styledProps}>
      {children}
    </Resizer>
  );
};

Container.defaultProps = {
  height: 300,
  width: "100%",
  background: "#FFFFFF",
};
