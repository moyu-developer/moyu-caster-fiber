import * as React from "react";
import * as MaterialsData from "@caster-fiber/materials";
import { Alert, Input, Space, Typography } from "antd";
import { MaterialItem } from "../Item";
import { useEditor } from "@craftjs/core";
import { useStyles } from "./useStyles";

/**
 * 使用test方法实现模糊查询
 * @param str 原始数据
 * @param keyWord 查询字段
 * @returns { boolean } 是否存在
 */
function fuzzyQuery(str: string, keyWord: string) {
  console.log(str, keyWord, "fuzzyQuery");
  const reg = new RegExp(keyWord, "i");
  return reg.test(str);
}

export const MaterialSection = () => {
  const [searchVal, setSearchVal] = React.useState("");
  const { connectors } = useEditor();
  const { layout, section } = useStyles();

  const materialsList = React.useMemo(() => {
    const materialOptions: Array<{
      key: string;
      value: any;
    }> = [];
    Object.keys(MaterialsData).forEach((key) => {
      const indexes = key as keyof typeof MaterialsData;
      const md = MaterialsData?.[indexes];
      if (searchVal) {
        if (fuzzyQuery(key, searchVal)) {
          materialOptions.push({
            key,
            value: md,
          });
        }
      } else {
        materialOptions.push({
          key,
          value: md,
        });
      }
    });
    return materialOptions;
  }, [MaterialsData, searchVal]);

  return (
    <Space direction="vertical" className={section}>
      <Input.Search
        placeholder="请输入当前控件名称"
        enterButton
        onSearch={(v) => setSearchVal(v)}
      />
      <Alert showIcon message="拖动一个小部件可以将其放入到画布当中." />
      <div className={layout}>
        {materialsList.map((option) => {
          return (
            <MaterialItem
              key={option.key}
              ref={(ref) =>
                connectors.create(
                  ref as HTMLElement,
                  React.createElement(option.value)
                )
              }
              text={option.key}
            />
          );
        })}
      </div>
    </Space>
  );
};
