import { Card, Collapse } from "antd";

export interface SetterContainerProps {
  header: string;
  children?: React.ReactNode;
  extra?: React.ReactNode;
}

export const SetterContainer = (props: SetterContainerProps) => {
  return (
    <Collapse bordered={false} size="small">
      <Collapse.Panel
        key={props.header}
        header={props.header}
        extra={props.extra}
        style={{
        }}
      >
        <div style={{
          boxSizing: 'border-box',
          paddingBottom: 0,
          height: '100%'
        }} >
          {props.children}
        </div>
      </Collapse.Panel>
    </Collapse>
  );
};
