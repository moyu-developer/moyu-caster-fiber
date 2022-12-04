import { Box } from "@/components/Box";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Input, Space, Typography } from "antd";
import { SpotlightModal } from "../Spotlight";

const classes = {
  search: css({
    display: "flex",
    padding: `0 12px`,
  }),
};

export const SearchBar = () => {
  return (
    <Space className={classes.search}>
      <SpotlightModal
        trigger={
          <Input
            readOnly
            
            prefix={
              <Typography.Text type="secondary">
                <SearchOutlined />
              </Typography.Text>
            }
            placeholder="搜索"
            suffix={<Typography.Text type="secondary">⌘ J</Typography.Text>}
          />
        }
      ></SpotlightModal>

      <Button icon={<PlusOutlined />}></Button>
    </Space>
  );
};
