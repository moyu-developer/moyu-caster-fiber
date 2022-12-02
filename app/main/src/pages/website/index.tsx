import { ActionType, ProCard } from "@ant-design/pro-components";
import { useWebSiteStore } from "./useModel";
import { useRef } from "react";
import { WebSiteProList } from './WebSiteProList'
import { PageTableProList } from './PageTableProList'


export default () => {
  const actionRef = useRef<ActionType>();
  const store = useWebSiteStore();
  console.log(store, "store");
  return (
    <ProCard style={{
      height: "100%"
    }} split="vertical" bordered >
      <ProCard  colSpan="50%">
        <WebSiteProList/>
      </ProCard>
      <ProCard title="左右分栏子卡片带标题" headerBordered>
        <PageTableProList/>
      </ProCard>
    </ProCard>
  );
};
