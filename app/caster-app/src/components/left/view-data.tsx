import * as React from "react";
import {
  Modal,
  Button,
  Tooltip,
  TabsProps,
  Tabs,
  Space,
  Tag,
  theme,
  Typography,
} from "antd";
import { useEditor } from "@craftjs/core";
import { useBoolean } from "react-use";
import { CodeOutlined, CopyFilled } from "@ant-design/icons";
import MonacoCodeEditor from "@monaco-editor/react";
import { css } from "@emotion/css";

const RenderDataView = () => {
  const { token } = theme.useToken();
  const {} = useEditor();

  return (
    <div
      className={css({
        position: "relative",
        background: token.colorBgLayout,
        padding: token.paddingMD,
        borderRadius: token.borderRadiusSM,
        maxHeight: "400px",
        overflow: "auto",
        marginTop: token.marginMD,
      })}
    >
      <Typography.Text
        type="secondary"
        className={css({
          position: "absolute",
          top: 0,
          right: 0,
          height: "40px",
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: token.borderRadiusSM,
          cursor: "pointer",
          "&:hover": {
            background: token.colorBgTextHover,
            transition: "background .8s",
          },
        })}
      >
        <CopyFilled />
      </Typography.Text>
      <Typography.Text>
        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
      </Typography.Text>
    </div>
  );
};

const items: TabsProps["items"] = [
  {
    key: "json",
    label: `JSON Schema`,
    children: <RenderDataView />,
  },

  {
    key: "state",
    label: `StateText`,
    children: <RenderDataView />,
  },

  {
    key: "js-esm",
    label: `JS ESM`,
    children: <RenderDataView />,
    disabled: true,
  },
];

export function ViewData(): JSX.Element {
  const [visible, toggle] = useBoolean(false);

  return (
    <>
      <Tooltip title="获取当前视图的ViewData" placement="bottom">
        <Button
          type="text"
          size="small"
          icon={<CodeOutlined />}
          onClick={toggle}
        />
      </Tooltip>

      <Modal
        title={
          <Space>
            ViewData
            <Tag color="red">Beta</Tag>
          </Space>
        }
        width={800}
        footer={null}
        open={visible}
        onCancel={toggle}
      >
        <Tabs defaultActiveKey="1" items={items} />
      </Modal>
    </>
  );
}
