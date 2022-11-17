import { CustomSetterFormItemProps } from "@/global";
import { Button, ButtonProps } from "antd";

export interface ShadowCheckBoxSetterProps<T>
  extends CustomSetterFormItemProps<T> {
  bindVal: string | number | boolean;
}

export const ShadowCheckBoxSetter = ({
  children,
  value,
  onChange,
  bindVal,
  ...buttonProps
}: ShadowCheckBoxSetterProps<string | number | boolean | undefined> &
  Omit<ButtonProps, "onClick" | "type">) => {
  const checked = bindVal === value;

  return (
    <Button
      {...buttonProps}
      type={checked ? "primary" : undefined}
      onClick={() => onChange && onChange(checked ? undefined : bindVal)}
    />
  );
};
