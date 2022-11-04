import { Button, Menu, Dropdown, Space, Typography } from "antd";
import { VerticalAlignTopOutlined, SendOutlined, RocketOutlined } from "@ant-design/icons";
import lz from "lzutf8";
import { useEditor } from "@craftjs/core";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "发布",
        icon: <SendOutlined/>
      },
      {
        key: "2",
        label: "部署",
        danger: true,
        icon: <RocketOutlined/>
      },
    ]}
  />
);

export const Save = () => {

  const { query } = useEditor()

  const handleEditorSaveEvent = () => {
    const json = query.serialize();
    const lzPageState = lz.encodeBase64(lz.compress(json))
    console.log(lzPageState, 'json')
  }

  return (
    <Space>
      {/* <Dropdown.Button onClick={handleEditorSaveEvent} danger icon={<EllipsisOutlined/>} placement="bottomCenter" overlay={menu}>
        保存
      </Dropdown.Button> */}
      <Button size="small" onClick={handleEditorSaveEvent}  type="primary" ghost >
        保存
      </Button>
      <Button size="small" type="primary" icon={<VerticalAlignTopOutlined />}>
        立即发布
      </Button> 
    </Space>
  );
};
