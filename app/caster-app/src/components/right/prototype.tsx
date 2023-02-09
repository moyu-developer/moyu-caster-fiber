import * as React from "react";
import {
  Avatar,
  Card,
  Col,
  Space,
  Row,
  theme,
  Typography,
  Input,
  Collapse,
  Result,
} from "antd";
import { css } from "@emotion/css";
import {
  FileOutlined,
  SearchOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { useEditor } from "@craftjs/core";
import { ProForm, ProFormRadio } from "@ant-design/pro-components";

export function Prototype() {
  const { token } = theme.useToken();
  const { setterMap, actions, props, Settings } = useEditor((state, query) => {
    const [curNodeId] = state.events.selected;

    let result;

    // 当前存在被选中的组件
    if (curNodeId) {
      const { data, related } = state.nodes?.[curNodeId];
      result = {
        props: data.props,
        Settings: related.settings || null,
        setterMap: {},
      };

      return result;
    }
  });

  React.useEffect(() => {
    console.log(props, "props");
  }, [props]);

  console.log(Settings, "Settings");

  return (
    <ProForm size="small" layout="vertical" submitter={false}>
      {Settings ? (
        <Settings />
      ) : (
        <div
          className={css({
            padding: token.paddingSM,
          })}
        >
          <Card>
            <Typography.Text type="secondary">
              没有选择组件。 单击一个组件以将其选中。
            </Typography.Text>
          </Card>
        </div>
      )}
    </ProForm>
  );
}
