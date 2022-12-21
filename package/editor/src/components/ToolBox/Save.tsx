import { Button, Menu, message, notification, Space } from "antd";
import {
  VerticalAlignTopOutlined,
  SendOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { useEditor } from "@craftjs/core";
import { PublishModal } from "./PublishModal";
import lz from "lzutf8";
import { useEditorData } from "@/state/useEditorData";

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
  const { onSave } = useEditorData()
  const { query } = useEditor();

  const handleEditorSaveEvent = async () => {
    const json = query.serialize();
    const lzPageState = lz.encodeBase64(lz.compress(json));
    const bool = await onSave({
      state: lzPageState
    })
    if (bool) {
      notification.success({
        message: '保存成功',
        description: '当前编辑器状态已保存成功'
      })
    } else {
      message.error(`保存失败，请重试`)
    }
  };

  return (
    <Space>
      <Button size="small" onClick={handleEditorSaveEvent} type="primary" ghost >
        保存
      </Button>
      <PublishModal
      />
    </Space>
  );
};
