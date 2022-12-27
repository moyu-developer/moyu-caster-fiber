import React, { ReactNode, useEffect } from "react";
import { Editor, useEditor } from "@craftjs/core";
import { EmptyResult } from "../Empty";
import useCreateStyles from "./styles";
import { Button, Form, FormProps, Typography } from "antd";
import { CodeOutlined } from '@ant-design/icons'
import merge from 'lodash/merge'

export interface PreferencePanesProps {
  children?: ReactNode;
}

export const PreferencePanes = (props: PreferencePanesProps) => {
  const { panels, title, form } = useCreateStyles();
  const [actionForm] = Form.useForm()

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
        props: data.props
      };
    }
    return {
      setter: selectedComponent,
    };
  });

  /**
   * 处理setter内容修改时的变化
   * @param changeValue 修改setter内容
   */
  const handleSetterValueChange: FormProps['onValuesChange'] = (changeValue) => {
    if (setter.id) {
      actions.setProp(setter.id, (setterProps) => {
        setterProps = merge(setterProps, changeValue)
      })
    }
  }

  useEffect(() => {
    if (setter?.id) {
      /** 切换组件清除setter配置 */
      actionForm.resetFields()
      
      /** 设置新组件内容属性配置 */
      actionForm.setFieldsValue({
        
        ...setter.props,
      })
    }
  }, [setter?.id])

  return (
    <div className={panels}>
      <Typography.Text className={title}>属性面板</Typography.Text>
      <div className={form} >
        {setter?.settings ? (
          <Form
            form={actionForm}
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
    </div>
  );
};
