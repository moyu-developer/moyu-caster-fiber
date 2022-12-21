import { useEditorData } from "@/state/useEditorData";
import {
  RotateLeftOutlined,
  RotateRightOutlined,
  FunctionOutlined,
  ClearOutlined,
  QuestionCircleFilled
} from "@ant-design/icons";
import { useEditor } from "@craftjs/core";
import { theme, Space, Typography, Divider, message } from "antd";
import { TooltipButton } from "./TooltipButton";
import dayjs from 'dayjs'
import { useStyles } from './useStyles'

const { useToken } = theme;

export const Actions = () => {
  const { data } = useEditorData()
  const { actions, query } = useEditor();
  const { token } = useToken();
  const classes = useStyles()


  const handleClearCanvasEvent = () => {
    const nodes = query.getSerializedNodes()
    const rootNode = nodes?.['ROOT']
    // 存在Root节点， 需要做🆑
    if (rootNode && rootNode.nodes?.length > 0) {
      actions.deserialize({
        ROOT: {
          ...rootNode,
          nodes: []
        }
      })
      message.success(`当前画布已清除`)
    } else {
      message.error(`清空失败，当前画布暂无内容`)
    }
  }

  return (
    <Space size={0} split={<Divider type="vertical" />} >
      <Typography.Text ellipsis className={classes.title} >{data?.name}</Typography.Text>
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
          onClick={handleClearCanvasEvent}
          icon={<ClearOutlined />}
        />
        <TooltipButton 
          type="text" 
          icon={<FunctionOutlined />} 
        />
         <TooltipButton 
          type="text" 
          tooltip={`最近保存时间: ${dayjs(data?.updatedAt).format('YYYY-MM-DD HH:mm:ss')}`}
          icon={<QuestionCircleFilled />} 
        />
      </Space>
    </Space>
  );
};
