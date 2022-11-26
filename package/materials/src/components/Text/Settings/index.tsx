import { Collapse } from "antd";
import { TypographyGroupSettings } from '@/reference/TypographyGroup'

export const Settings = () => {
  return (
    <Collapse
      expandIconPosition="end"
      bordered={false}
    >
      <TypographyGroupSettings/>
    </Collapse>
  );
};
