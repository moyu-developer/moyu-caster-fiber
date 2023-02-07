import * as React from "react";
import { Alert, Card, Tree, Typography } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import { useEditor, SerializedNodes } from "@craftjs/core";
import { DownOutlined } from "@ant-design/icons";

const depNodes = (node: SerializedNodes[0], data: SerializedNodes): any => {
  if (node) {
    const depList = node.nodes.map((id) => {
      const curNode = data?.[id];
      return {
        title: curNode.displayName,
        key: id,
        children: curNode.nodes?.length > 0 ? depNodes(curNode, data) : [],
      };
    });
    return depList;
  }
  return [];
};

export function NodeTree(): JSX.Element {
  const [treeData, setTreeData] = React.useState<DataNode[]>([]);

  const { actions, query, id } = useEditor((state) => {
    const [curNodeId] = state.events.selected;
    return {
      id: curNodeId,
    };
  });

  React.useEffect(() => {
    const serializedNodes = query.getSerializedNodes();
    const data = depNodes(serializedNodes["ROOT"], serializedNodes);
    setTreeData(data);
  }, []);

  return treeData?.length > 0 ? (
    <Tree
      blockNode
      showLine
      selectedKeys={[id]}
      switcherIcon={<DownOutlined />}
      treeData={treeData}
    />
  ) : (
    <Card size="small" >
      <Typography.Text type="secondary">
          您的页面空空如也？前往右侧组件面板添加点什么东西吧
        </Typography.Text>
    </Card>
  );
}
