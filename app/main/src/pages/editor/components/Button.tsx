// components/user/Button.js
import React  from "react";
import {Button as MaterialButton, ButtonProps} from "antd";
import { useNode } from "@craftjs/core";

export const Button = ({size, color, children}: ButtonProps) => {
  const { connectors: {connect, drag} } = useNode();
  return (
    <MaterialButton ref={ ref => connect(drag(ref as HTMLElement))} size={size}  color={color}>
      {children}
    </MaterialButton>
  )
}