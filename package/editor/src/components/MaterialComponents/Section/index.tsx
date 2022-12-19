import * as React from "react";
import * as MaterialsData from "@caster-fiber/materials";
import { Alert, Button, Collapse, Input, Space, Typography } from "antd";
import { MaterialItem } from "../Item";
import { useEditor, Element } from "@craftjs/core";
import { useStyles } from "./useStyles";

/**
 * 使用test方法实现模糊查询
 * @param str 原始数据
 * @param keyWord 查询字段
 * @returns { boolean } 是否存在
 */
function fuzzyQuery(str: string, keyWord: string) {
  const reg = new RegExp(keyWord, "i");
  return reg.test(str);
}

export const MaterialSection = () => {
  const [searchVal, setSearchVal] = React.useState("");
  const { connectors } = useEditor();
  const { layout, section, components } = useStyles();

  const materialsList = React.useMemo(() => {
    const materialOptions: Array<{
      key: string;
      value: any;
    }> = [];
    Object.keys(MaterialsData).forEach((key) => {
      const indexes = key as keyof typeof MaterialsData;
      const md = MaterialsData?.[indexes];
      
      console.log(md.craft?.custom, 'option.value?.craft?.displayName')

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
      <Alert message="拖动小部件可以将其放入到画布当中进行配置" />
      <div className={components}>
        <Collapse ghost>
          <Collapse.Panel key="baseComponents" header="基础部件">
            <div className={layout}>
              {materialsList.map((option) => {
                let value = React.createElement(option.value);
                if (option.key === "Container") {
                  value = (
                    <Element
                      is={option.value}
                      canvas
                      height={300}
                      width="100%"
                      paddingTop={20}
                      paddingBottom={20}
                      paddingLeft={20}
                      paddingRight={20}
                    />
                  );
                }
                return (
                  <MaterialItem
                    key={option.key}
                    text={option.value?.craft?.displayName}
                    ref={(ref) => connectors.create(ref as HTMLElement, value)}
                  ></MaterialItem>
                );
              })}
            </div>
          </Collapse.Panel>
          <Collapse.Panel key="messageComponents" header="信息反馈">
            <div className={layout}>
              {["通知栏", "提示器"].map((v) => (
                <MaterialItem key={v} text={v}></MaterialItem>
              ))}
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
    </Space>
  );
};
