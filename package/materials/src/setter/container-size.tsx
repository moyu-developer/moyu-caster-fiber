import { Col, Row, Collapse, CollapseProps, Typography } from "antd";
import { ProFormText } from "@ant-design/pro-components";
import { useEditor } from "@craftjs/core";
import { SetterContainer } from "@/atom/collapse";

export const ContainerSizeSetter: React.FC<CollapseProps> = (props) => {
  const { width, height } = useEditor((state) => {
    const [curNodeId] = state.events.selected;

    let result = {
      width: "100%",
      height: "100%",
    };

    // 当前存在被选中的组件
    if (curNodeId) {
      const { data, related } = state.nodes?.[curNodeId];
      if (data?.props.style.width) {
        result.width = data?.props.style.width;
      }
      if (data?.props.style.height) {
        result.height = data?.props.style.height;
      }
    }
    return result;
  });

  return (
    <SetterContainer
      header="容器大小"
      extra={
        <Typography.Text type="secondary">
          {width} x {height}
        </Typography.Text>
      }
    />
  );
};
