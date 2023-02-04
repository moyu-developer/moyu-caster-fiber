import * as React from "react";
import { Button, Dropdown, MenuProps } from "antd";
import {
  MoreOutlined,
  FormOutlined,
  CopyFilled,
  DeleteFilled,
} from "@ant-design/icons";

enum ActionType {
  RENAME,
  COPY,
  DELETE,
}

const items: MenuProps["items"] = [
  {
    label: "重命名",
    key: ActionType.RENAME,
    icon: <FormOutlined />,
  },
  {
    label: "复制",
    key: ActionType.COPY,
    icon: <CopyFilled />,
  },
  {
    label: "删除",
    key: ActionType.DELETE,
    icon: <DeleteFilled />,
    danger: true,
  },
];

export function ProjectMoreAction(): JSX.Element {
  return (
    <Dropdown placement="bottom" menu={{ items }}>
      <Button type="text" size="small" icon={<MoreOutlined />} />
    </Dropdown>
  );
}
