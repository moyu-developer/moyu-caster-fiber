import { ActionType, ProCard } from "@ant-design/pro-components";
import { useRef } from "react";
import { WebSiteProList } from './WebSiteProList'
import { PageTableProList } from './PageTableProList'
import { Button } from "antd";


export default () => {

  return (
    <ProCard style={{
      height: "100%"
    }} split="vertical" bordered >
      <ProCard size="small" headerBordered  title="站点" extra={<Button type="primary" >创建站点</Button>} colSpan="25%">
        <WebSiteProList />
      </ProCard>
      <ProCard size="small" title="路由器" extra={<Button type="primary" >新建路由</Button>} >
        <PageTableProList/>
      </ProCard>
    </ProCard>
  );
};
