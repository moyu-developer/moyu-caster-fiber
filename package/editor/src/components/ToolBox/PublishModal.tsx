import React from "react";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Modal, Steps, StepsProps, theme } from "antd";
import { useBoolean } from "../../hooks/useBoolean";

export interface PublishModalProps {
  triggerNode?: React.ReactNode;
}

const useStyles = () => {

  const { token } = theme.useToken()

  return {
    content: css({
      height: 300,
      background: "#CCC",
      marginTop: token.marginXS
    }),
  };
};

const publishPipeLine: StepsProps["items"] = [
  {
    title: "保存",
  },
  {
    title: `发布`,
  },
  {
    title: `构建`,
  },
  {
    title: "结果",
  },
];

export const PublishModal = (props: PublishModalProps) => {
  const { value, setTrue, setFalse } = useBoolean();
  const classes = useStyles()

  return (
    <React.Fragment>
      <Button
        onClick={setTrue}
        size="small"
        type="primary"
        icon={<VerticalAlignTopOutlined />}
      >
        立即发布
      </Button>
      <Modal title="部署面板" width={900} open={value} onCancel={setFalse}>
        <Steps current={1} items={publishPipeLine}></Steps>
        <div className={classes.content} >content: "111"</div>
      </Modal>
    </React.Fragment>
  );
};
