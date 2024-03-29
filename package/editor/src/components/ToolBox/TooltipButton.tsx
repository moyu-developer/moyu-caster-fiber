import { Button, ButtonProps, ConfigProvider, Tooltip } from "antd";

export interface TooltipButtonProps extends ButtonProps {
  tooltip?: string;
}

export const TooltipButton = ({
  tooltip,
  children,
  ...props
}: TooltipButtonProps) => {
  return (
    <Tooltip placement="bottom" title={tooltip}>
      <Button type="primary" {...props} />
    </Tooltip>
  );
};
