import {
  UndoOutlined,
  RedoOutlined,
  DesktopOutlined,
  FunctionOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import { useEditor } from "@craftjs/core";
import { Button, Space } from "antd";

export const Actions = () => {
  const { actions } = useEditor();

  console.log(actions, 'actions')

  return (
    <Space size={0}>
      <Button.Group>
        <Button
          onClick={actions.history.undo}
          type="link"
          icon={<UndoOutlined />}
        ></Button>
        <Button
          onClick={actions.history.redo}
          type="link"
          icon={<RedoOutlined />}
        ></Button>
        <Button
          onClick={actions.history.clear}
          type="link"
          icon={<ClearOutlined />}
        ></Button>
        <Button type="link" icon={<FunctionOutlined />}></Button>
        <Button type="link" icon={<DesktopOutlined />}>400x300</Button>
      </Button.Group>
    </Space>
  );
};
