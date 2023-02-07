import { Card, List, Space, Tag, Typography } from "antd";

const data = [
  {
    title: "首页",
    isHome: true,
    description: '店铺首页'
  },
  {
    title: "专题页1",
    description: '店铺专题页1'
  },
  {
    title: "专题页1",
    description: '店铺专题页2'
  },
  {
    title: "专题页3",
    description: '店铺专题页3'
  },
];

export function ProjectPageList() {
  return (
    <Card size="small" >
      <List
      itemLayout="vertical"
      dataSource={data}
      size="small"
      renderItem={(item) => (
        <List.Item
          actions={[
            <Typography.Link key="page-copy" >
              删除
            </Typography.Link>,
            <Typography.Link key="page-delete" type="danger">
              删除
            </Typography.Link>,
          ]}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <List.Item.Meta
            title={
              <Space >
                <Typography.Text  >{item.title}</Typography.Text>
                <Tag color="blue">当前</Tag>
              </Space>
            }
            description={item.description}
          />
        </List.Item>
      )}
    />
    </Card>
  );
}
