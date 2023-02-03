import * as React from "react";
import { Editor } from "@craftjs/core";
import { ToolBox, Left, Right, Canvas, CreateViewModal } from "../.";
import { Layout, ConfigProvider } from "antd";
import { css } from "@emotion/css";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export interface FrameworkProviderProps {}

export const FrameworkContext =
  React.createContext<FrameworkProviderProps | null>(null);

export function Framework(props: { children?: React.ReactNode }): JSX.Element {
  return (
    <FrameworkContext.Provider value={null}>
        <Editor>
          <CreateViewModal/>
          <Layout
            className={css({
              height: "100vh",
            })}
          >
          <ToolBox/>
            <Layout>
            <Left />
              <Canvas/>
              <Right/>
            </Layout>
          </Layout>
        </Editor>
    </FrameworkContext.Provider>
  );
}
