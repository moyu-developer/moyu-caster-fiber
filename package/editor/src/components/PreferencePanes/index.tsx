import React, { ReactNode } from "react";
import { Editor, useEditor } from "@craftjs/core";
import { EmptyResult } from "../Empty";
import useCreateStyles from "./styles";
import { Button } from "antd";

export interface PreferencePanesProps {
  children?: ReactNode;
}

export const PreferencePanes = (props: PreferencePanesProps) => {
  const { panels } = useCreateStyles();

  const { actions, setter } = useEditor<any>((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selectedComponent = null;

    console.log(state.nodes[currentNodeId], "state.nodes[currentNodeId]");

    if (currentNodeId) {
      const { data, related } = state.nodes[currentNodeId];
      selectedComponent = {
        id: currentNodeId,
        name: data.name,
        displayName: data?.displayName || "",
        settings: related?.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }
    return {
      setter: selectedComponent,
    };
  });

  console.log(setter, "setter");

  return (
    <div className={panels}>
      {setter ? (
        React.createElement(setter?.settings)
      ) : (
        <EmptyResult
          subTitle={`暂无设置， 点击选择画布区域中的组件可以打开快速组件设置面板`}
          extra={[
            <Button key="noFound" type="primary">查找Setter</Button>
          ]}
        />
      )}
    </div>
  );
};
