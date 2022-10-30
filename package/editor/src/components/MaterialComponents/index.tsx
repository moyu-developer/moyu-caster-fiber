import * as React from "react";
import {
  Avatar,
  Space,
  Card,
  Typography,
  Segmented,
  Collapse,
  SegmentedProps,
} from "antd";
import { MaterialSection } from "./Section";
import { useEditor } from "@craftjs/core";
import useStyles from "./useStyles";

export const MaterialComponents = () => {
  const [segmented, setSegmented] =
    React.useState<SegmentedProps["value"]>("探索");
  const styles = useStyles();

  return (
    <div className={styles.list}>
      <Collapse bordered={false}>
        <Collapse.Panel key="Page" header="页面"></Collapse.Panel>
      </Collapse>

      <div className={styles.segmented}>
        <Segmented
          value={segmented}
          onChange={(v) => setSegmented(v)}
          block
          options={["探索", "控件"]}
        />
      </div>
      {segmented === "控件" ? <MaterialSection /> : null}
    </div>
  );
};
