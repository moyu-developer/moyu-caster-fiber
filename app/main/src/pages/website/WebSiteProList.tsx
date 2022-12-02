import { ProList } from "@ant-design/pro-components";
import { Button, Space, Tag, Typography } from "antd";
import { useWebSiteStore } from "./useModel";

import {
  WebSiteListRequestParams,
  WebSiteListResponseTypes,
} from "@/api/website/list";

type WebSiteListItem = WebSiteListResponseTypes["data"][0];

export const WebSiteProList = () => {
  const store = useWebSiteStore();

  return (
    <ProList<WebSiteListItem>
      bordered
      ghost
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      search={{
        filterType: "light",
      }}
      rowKey="name"
      headerTitle="基础列表"
      request={(params) => store.fetch(params as WebSiteListRequestParams)}
      pagination={{
        pageSize: 5,
      }}
      showActions="hover"
      metas={{
        title: {
          dataIndex: "name",
          title: "站点名称",
        },
        avatar: {
          dataIndex: "avatar",
          search: false,
        },
        description: {
          dataIndex: "id",
          render: (d) => (
            <Typography.Text type="secondary" copyable>
              {d}
            </Typography.Text>
          ),
          search: false,
        },
        subTitle: {
          dataIndex: "labels",
          render: (_, row) => {
            return <Tag color="blue">{row.env}</Tag>;
          },
          search: false,
        },
        actions: {
          render: (text, row) => [
            <Typography.Link>编辑</Typography.Link>,
            <Typography.Text type="danger">注销</Typography.Text>,
          ],
          search: false,
        },
      }}
    />
  );
};
