import * as React from 'react';
import { css } from "@stitches/react";
import { Card, Avatar, Typography } from "antd";

export interface MaterialItemProps {
  text?: string;
  icon?: string;
}

const styles = {
  body: css({
    cursor: "pointer"
  }),

  text: css({
    paddingTop: 6
  })
};

export const MaterialItem = React.forwardRef<HTMLDivElement, MaterialItemProps>((props, ref) => {
  return (
    <Card
      ref={ref}
      size="small"
      className={styles.body()}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: `12px 4px`
      }}
    >
      <Avatar shape="square" >Text</Avatar>
      <Typography.Text className={styles.text()} >{props.text}</Typography.Text>
    </Card>
  );
}
)