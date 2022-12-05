import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import { ModalForm, ModalFormProps } from "@ant-design/pro-components";
import { Divider, Input } from "antd";

export const SpotlightModal = (props: ModalFormProps) => {
  return (
    <ModalForm
      {...props}
      submitter={false}
      width={650}
      modalProps={{
        closeIcon: <div/>,
        onCancel: () => console.log('run'),
      }}
    >
      <Input suffix={<SearchOutlined/>} bordered={false} size="large" placeholder="请输入搜索内容" />
      <Divider/>
    </ModalForm>
  );
};
