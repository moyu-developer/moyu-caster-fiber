import * as React from "react";
import { Layout, Space, Tabs, TabsProps } from 'antd'
import { Materials } from './materials'
import { Prototype } from './prototype'

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: 'fields',
    label: `属性`,
    children: <Prototype/>
  },
  {
    key: 'components',
    label: `组件`,
    children: <Materials/>
  },
  {
    key: 'theme',
    label: "主题",
    disabled: true,
    children: `Content of Tab Pane 3`,
  },
];

export function Right(): JSX.Element {
  const [tabKey, setTabKey] = React.useState<number>(0);

  return (
    <Layout.Sider width={320} theme="light">
      <Tabs centered size="small" defaultActiveKey="components" items={items} onChange={onChange} />
    </Layout.Sider>
  );
}
