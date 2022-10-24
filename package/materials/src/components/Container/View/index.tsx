import { useNode } from "@craftjs/core";
import { FunctionComponent, ReactNode } from "react"

export interface MaterialFunctionComponent<P= any> extends FunctionComponent<P> {
  craft?: any
}

export interface ContainerProps {
  children?: ReactNode,
  height?: number;
}

export const Container: MaterialFunctionComponent<ContainerProps> = ({ children, height }) => {


  const { connectors: {connect, drag} } = useNode();
  
  return <div style={{ height }}  ref={ref=> connect(drag(ref as HTMLElement))} >{children}</div>
}