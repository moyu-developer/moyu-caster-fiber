import { HexColorPicker } from "react-colorful";
import { CustomSetterFormItemProps } from "@/global";
import { Popover, Button, Space } from "antd";
import { css } from "@emotion/css";

const styles = {
  content: css({
    width: 200,
  }),
  tag: css({
    background: "red",
    width: 30,
    height: 30,
    borderRadius: 4,
  }),
};

const defaultColors = [
  "#ff6900",
  "#fcb900",
  "#7bdcb5",
  "#00d084",
  "#0693e3",
  "#abb8c3",
  "#555555",
  "#9900ef",
  "#f78da7",
  "#795548",
];

export interface ColorSetterProps<T> extends CustomSetterFormItemProps<T> {}

export const ColorSetter = (props: ColorSetterProps<string>) => {
  return (
    <Popover
      title={props.value}
      placement="bottom"
      content={
        <Space className={styles.content} direction="vertical">
          <HexColorPicker color={props.value}  onChange={(v) =>  console.log(v)} />
          <Space
            style={{
              width: "100%",
            }}
            wrap
            size={[12, 12]}
          >
            {defaultColors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                }}
                className={styles.tag}
              />
            ))}
          </Space>
        </Space>
      }
    >
      <Button type="primary">选择颜色</Button>
    </Popover>
  );
};
