import * as React from "react";
import { Segmented, SegmentedProps } from "antd";
import { MaterialSection } from "./Section";
import { NodeSchemaData } from "../NodeSchemaData";
import { PageTable } from "./PageTable";
import { Footer } from "./Footer";
import useStyles from "./useStyles";

export const MaterialComponents = () => {
  const [segmented, setSegmented] =
    React.useState<SegmentedProps["value"]>("探索");
  const styles = useStyles();

  return (
    <div className={styles.panels}>
      <div className={styles.collapse}>
        <PageTable />
        <div className={styles.segmented}>
          <Segmented
            value={segmented}
            onChange={(v) => setSegmented(v)}
            block
            options={["探索", "控件"]}
            onResize={undefined}
            onResizeCapture={undefined}
          />
        </div>
        {segmented === "控件" ? <MaterialSection /> : <NodeSchemaData />}
      </div>
      <Footer />
    </div>
  );
};
