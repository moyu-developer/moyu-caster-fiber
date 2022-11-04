import {
  RotateLeftOutlined,
  RotateRightOutlined,
  DesktopOutlined,
  FunctionOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import { useEditor } from "@craftjs/core";
import { theme, Space, Typography, Divider } from "antd";
import { TooltipButton } from "./TooltipButton";
import { useStyles } from './useStyles'

const { useToken } = theme;

export const Actions = () => {
  const { actions } = useEditor();
  const { token } = useToken();
  const classes = useStyles()

  return (
    <Space size={0} split={<Divider type="vertical" />} >
      <Typography.Text ellipsis className={classes.title} >这是站点这是站点标题这是站点标题这是站点标题这是站点标题这是站点标题这是站点标题这是站点标题这是站点标题标题</Typography.Text>
      <Space size={0} >
        <TooltipButton
          type="text"
          tooltip="撤回"
          onClick={actions.history.undo}
          icon={<RotateLeftOutlined />}
        />
        <TooltipButton
          type="text"
          tooltip="还原"
          onClick={actions.history.redo}
          icon={<RotateRightOutlined />}
        />
        <TooltipButton
          type="text"
          tooltip="清除"
          onClick={actions.history.clear}
          icon={<ClearOutlined />}
        />
        <TooltipButton 
          type="text" 
          icon={<FunctionOutlined />} 
        />
      </Space>
    </Space>
  );
};
