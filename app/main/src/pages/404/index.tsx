import { useStyles } from "./useStyles";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Result, Typography } from "antd";

const { Paragraph, Text } = Typography;

export default () => {
  const styles = useStyles();

  return (
    <div className={styles.error}>
      <Result
        status="error"
        title="页面发生错误"
        subTitle="您似乎碰到了未知的困难，您可以尝试刷新当前页面活着点击下方操作按钮进入指定的页面。"
        extra={[
          <Button type="primary" key="console">
            返回首页
          </Button>,
          <Button danger key="wx">联系作者</Button>,
        ]}
      >
        <div className="desc">
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
              }}
            >
              可能存在的一些错误原因，尝试检查它们？
            </Text>
          </Paragraph>
          <Paragraph>
            <Button type="text" danger icon={<CloseCircleOutlined />} /> Your
            account has been frozen. <a>Thaw immediately &gt;</a>
          </Paragraph>
          <Paragraph>
            <Button type="text" danger icon={<CloseCircleOutlined />} /> Your
            account is not yet eligible to apply. <a>Apply Unlock &gt;</a>
          </Paragraph>
        </div>
      </Result>
    </div>
  );
};
