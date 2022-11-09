import { HexColorPicker } from "react-colorful";
import { CustomSetterFormItemProps } from "@/global";
import { Popover, Button, Space, theme, Typography, Tag, Input, message } from "antd";
import { css } from "@emotion/css";

const { useToken } = theme;

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
  const { token } = useToken();

  const handleColorPickerValueChange = (v: string) => {

    console.log(v, '/^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/')

    if ( props.onChange) {
      props.onChange(v)
    }
  };

  return (
    <Space>
      <Popover
        title={props.value}
        placement="bottom"
        trigger="click"
        content={
          <Space className={styles.content} direction="vertical">
            <HexColorPicker
              color={props.value}
              onChange={handleColorPickerValueChange}
            />
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
                    boxShadow:
                      props.value === color ? token.boxShadowCard : undefined,
                  }}
                  className={styles.tag}
                  onClick={() => handleColorPickerValueChange(color)}
                />
              ))}
            </Space>
          </Space>
        }
      >
        <Space>
          <Button type="primary">选择颜色</Button>
        </Space>
      </Popover>
      {props.value ? (
        <Input
          maxLength={6}
          min={6}
          prefix={<Tag color={props.value}>HEX(#)</Tag>}
          value={props.value.replace("#", "")}
          onChange={(e) => handleColorPickerValueChange("#" + e.target.value)}
        />
      ) : null}
    </Space>
  );
};
