import { Button, Menu, Space } from "antd";
import {
  VerticalAlignTopOutlined,
  SendOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { useEditor } from "@craftjs/core";
import { PublishModal } from "./PublishModal";
import lz from "lzutf8";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "发布",
        icon: <SendOutlined />,
      },
      {
        key: "2",
        label: "部署",
        danger: true,
        icon: <RocketOutlined />,
      },
    ]}
  />
);

export const Save = () => {
  const { query } = useEditor();

  const handleEditorSaveEvent = () => {
    const json = query.serialize();
    const lzPageState = lz.encodeBase64(lz.compress(json));
    console.log(lzPageState, "json");
  };

  return (
    <Space>
      <Button size="small" onClick={handleEditorSaveEvent} type="primary" ghost>
        保存
      </Button>
      <PublishModal
      />
    </Space>
  );
};
