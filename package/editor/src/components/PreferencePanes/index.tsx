import React, { ReactNode } from "react";
import { Editor, useEditor } from "@craftjs/core";
import { EmptyResult } from "../Empty";
import useCreateStyles from "./styles";
import { Button, Form, FormProps, Typography } from "antd";
import _ from 'lodash'

export interface PreferencePanesProps {
  children?: ReactNode;
}

export const PreferencePanes = (props: PreferencePanesProps) => {
  const { panels, title } = useCreateStyles();

  const { actions, setter } = useEditor<any>((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selectedComponent = null;

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

  const handleSetterValueChange: FormProps['onValuesChange'] = (changeValue) => {
    if (setter.id) {
      actions.setProp(setter.id, (setterProps) => {
        setterProps = _.merge(setterProps, changeValue)
      })
    }
  }

  return (
    <div className={panels}>
      <Typography.Text className={title}>属性面板</Typography.Text>
      {setter ? (
        <Form
          layout="vertical"
          onValuesChange={handleSetterValueChange}
        >
          {React.createElement(setter?.settings)}
        </Form>
      ) : (
        <EmptyResult
          subTitle={`暂无设置， 点击选择画布区域中的组件可以打开快速组件设置面板`}
          extra={[
            <Button key="noFound" type="primary">
              查找Setter
            </Button>,
          ]}
        />
      )}
    </div>
  );
};
