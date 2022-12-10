import { useEffect, useRef } from 'react';
import { EllipsisOutlined, PlusOutlined, SmileOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Result, Space, Tag, Typography } from 'antd';
import { useWebSiteStore } from "./useModel";

export enum PageTableStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
};

export type PageTable = {
  id: string
  name: string
  state: string
  route: string
  status: PageTableStatus
  createdAt: Date
  updatedAt: Date
  webSiteId: string
  userId: string
}

export interface PageTableProListProps {
  data: PageTable[]
}

export const PageTableProList = () => {
  const actionRef = useRef<ActionType>();
  const store =useWebSiteStore()

  const columns: ProColumns<PageTable>[] = [
    {
      dataIndex: 'index',
      title: '序号',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '页面标题',
      dataIndex: 'name',
      copyable: true,
      ellipsis: true,
      tip: '标题过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      disable: true,
      title: '路由',
      dataIndex: 'route',
      search: false,
      render: (_, row) => <Typography.Link href={`/editor/${row.webSiteId}/${row.id}`} copyable >{row.route}</Typography.Link>
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'createdAt',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
  ];

  useEffect(() => {
    if (store.webSiteId) {
      actionRef.current?.reload()
    }
  }, [store.webSiteId])

  if (!store.webSiteId) {
    return <Result
    icon={<SmileOutlined />}
    title="请点击左侧🫲站点栏目选择对应站点后路由器才会显示"
    extra={<Button type="primary">刷新</Button>}
  />
  }

  return (
    <ProTable<PageTable>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={(params) => {
        return store.getSitePageTable({
          current: 1,
          pageSize: 10,
          ...params,
          webSiteId: store.webSiteId as string
        }) as any
      }}
      editable={{
        type: 'multiple',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={false}
      dateFormatter="string"
      headerTitle={store.webSiteTitle}
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
      ]}
    />
  );
};