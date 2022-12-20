import { Button, Result } from "antd";
import { Frame, Editor } from "@craftjs/core";
import * as MaterialResolve from "@caster-fiber/materials";
import React from "react";

export default () => {
  const sourceDataRef = React.useRef<any>(
    window.sessionStorage.getItem(`__PreviewSourceData__`)
  );

  sourceDataRef.current = {
    ROOT: {
      type: { resolvedName: "Container" },
      isCanvas: true,
      props: {
        width: document.body.clientWidth,
        height: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        background: "#FFFFFF",
      },
      displayName: "基础容器",
      custom: {},
      hidden: false,
      nodes: ["rpVYvatknx"],
      linkedNodes: {},
    },
    rpVYvatknx: {
      type: { resolvedName: "Text" },
      isCanvas: false,
      props: {},
      displayName: "文本",
      custom: {},
      parent: "ROOT",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  };

  console.log(typeof sourceDataRef?.current, "sourceDataRef");

  if (!sourceDataRef?.current) {
    return (
      <Result
        status="500"
        title="页面未找到"
        subTitle="当前预览的页面不存在，请重新点击预览。查看"
      />
    );
  }

  return (
    <div>
      <Editor enabled={false} resolver={MaterialResolve}  >
        <Frame data={sourceDataRef.current} ></Frame>
      </Editor>
    </div>
  );
};
