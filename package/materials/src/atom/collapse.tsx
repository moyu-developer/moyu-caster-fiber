import { Collapse } from "antd";

export interface SetterContainerProps {
  header: string;
  children?: React.ReactNode;
  extra?: React.ReactNode;
}

export const SetterContainer = (props: SetterContainerProps) => {
  return (
    <Collapse bordered={false}>
      <Collapse.Panel
        key={props.header}
        header={props.header}
        extra={props.extra}
      >
        {props.children}
      </Collapse.Panel>
    </Collapse>
  );
};
