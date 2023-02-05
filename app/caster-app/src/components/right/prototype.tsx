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
} from "antd";
import { css } from "@emotion/css";
import {
  FileOutlined,
  SearchOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { useEditor } from '@craftjs/core'
import { ProForm, ProFormRadio } from "@ant-design/pro-components";

export function Prototype() {
  const { token } = theme.useToken();
  const {  } = useEditor((state, query) => {
    console.log(state, query, 'Prototype')
    const selected = state.events.selected

  })

  return (
    <ProForm size="small" layout="vertical" submitter={false}>
      <Collapse
        ghost
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <Collapse.Panel key="BASE" header="基础组件" extra="11">
          <ProFormRadio.Group options={["horizontal", "vertical", "inline"]} />
        </Collapse.Panel>
      </Collapse>
    </ProForm>
  );
}
