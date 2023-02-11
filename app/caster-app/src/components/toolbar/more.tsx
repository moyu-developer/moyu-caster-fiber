import * as React from "react";
import { Button, Dropdown, Typography, message, Tag } from "antd";
import { useEditor } from '@craftjs/core'
import { EllipsisOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { ItemType } from "antd/es/menu/hooks/useItems";

const Label = (props: { text: string; keyWord?: React.ReactNode }) => (
  <div
    className={css({
      display: "flex",
      justifyContent: "space-between",
    })}
  >
    <Typography.Text>{props.text}</Typography.Text>
    {props.keyWord ? (
      <Typography.Text type="secondary">{props.keyWord}</Typography.Text>
    ) : null}
  </div>
);

export function MoreActions(): JSX.Element {

  const { actions } = useEditor()

  const items: ItemType[] = [
    {
      key: "import",
      label: <Label text="导入数据"/>,
      disabled: true,
    },
    {
      key: "undo",
      label: <Label text="撤回" keyWord="⌘Z" />,
      onClick: actions.history.undo
    },
    {
      key: "redo",
      label: <Label text="重做" keyWord="⌘ ⇧ Z" />,
      onClick: actions.history.redo
    },
  ];

  return (
    <Dropdown
      placement="bottomCenter"
      overlayStyle={{
        width: 200,
      }}
      menu={{
        items,
      }}
    >
      <Button icon={<EllipsisOutlined />} />
    </Dropdown>
  );
}
