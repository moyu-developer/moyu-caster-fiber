import { List, Space, Tag, Typography } from "antd";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export function ProjectPageList() {
  return (
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
              <Space>
                /Page
                <Tag color="blue">当前</Tag>
              </Space>
            }
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
}
