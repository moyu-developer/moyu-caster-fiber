import React from "react";
import { useEditor } from "@craftjs/core";
import { css } from "@emotion/css";
import {
  Dropdown,
  Button,
  Collapse,
  message,
  MenuProps,
} from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { hasJSON } from '@/utils'
import ReactJsonView from "react-json-view";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

const jsonv = css({
  overflow: "auto",
  maxHeight: 800,
});

export const NodeSchemaData = () => {
  const { query } = useEditor();

  const sourceData = query.serialize();


  const jsonObject = React.useMemo(() => {
    if (hasJSON(sourceData)) {
      return JSON.parse(sourceData)
    }
    return {}
  }, [sourceData])

  const items: MenuProps["items"] = [
    {
      key: "copyState",
      label: "复制状态",
      onClick: () => {
        const txt = lz.encodeBase64(lz.compress(sourceData));
        copy(txt);
        message.success(`复制成功`);
      },
    },
    {
      key: "copySchema",
      label: "复制Schema",
      onClick: () => {
        copy(sourceData);
        message.success(`复制成功`);
      },
    },
  ];

  return (
    <Collapse bordered={false} collapsible="header">
      <Collapse.Panel
        key="fx"
        header="DataSource"
        extra={
          <Dropdown menu={{ items }}>
            <Button
              type="link"
              size="small"
              icon={<CopyOutlined />}
            />
          </Dropdown>
        }
      >
        <div className={jsonv}>
          <ReactJsonView
            displayDataTypes
            indentWidth={2}
            iconStyle="square"
            src={jsonObject}
          />
        </div>
      </Collapse.Panel>
    </Collapse>
  );
};
