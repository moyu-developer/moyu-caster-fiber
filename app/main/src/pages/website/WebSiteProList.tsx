import { ProList, CheckCard } from "@ant-design/pro-components";
import { Button, Space, Tag, Typography } from "antd";
import { useWebSiteStore } from "./useModel";
import { PageTable } from "./PageTableProList";

import {
  WebSiteListRequestParams,
  WebSiteListResponseTypes,
} from "@/api/website/list";
import { ArrowRightOutlined } from "@ant-design/icons";

type WebSiteListItem = WebSiteListResponseTypes["data"][0];

export interface WebSiteProListProps {}

export const WebSiteProList = (props: WebSiteProListProps) => {
  const store = useWebSiteStore();

  return (
    <ProList<WebSiteListItem>
      bordered
      ghost
      search={{
        filterType: "light",
      }}
      rowKey="id"
      request={(params) => store.fetch(params as WebSiteListRequestParams)}
      pagination={{
        pageSize: 50,
      }}
      showExtra="hover"
      split={false}
      metas={{
        title: {
          dataIndex: "name",
          title: "站点名称",
        },
        description: {
          dataIndex: "id",
          title: "唯一ID",
          render: (d) => (
            <Typography.Text type="secondary" copyable>
              {d}
            </Typography.Text>
          ),
        },
        subTitle: {
          dataIndex: "labels",
          render: (_, row) => {
            return <Tag color="blue">{row.env}</Tag>;
          },
          search: false,
        },
        extra: {
          dataIndex: "labels",
          title: "操作",
          search: false,
          render: (_: any, row: any) => (
            <Button
              type="primary"
              ghost
              icon={<ArrowRightOutlined />}
              onClick={() => store.setWebSiteInfo(row.name, row.id)}
            />
          ),
        },
      }}
    />
  );
};
