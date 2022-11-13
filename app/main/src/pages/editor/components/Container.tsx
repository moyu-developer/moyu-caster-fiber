// components/user/Container.js
import React from "react";
import { Layout } from "antd";
import { useNode } from "@craftjs/core";

export const Container = ({background, padding = 0, children}: any) => {

  const { connectors: {connect, drag} } = useNode();
  return (
    <Layout.Content ref={ref=> connect(drag(ref as HTMLElement))} style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Layout.Content>
  )
}