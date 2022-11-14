import { css } from "@emotion/css";
import { Collapse, CollapsePanelProps, Form, Input, InputNumber } from "antd";
import { ContenteditableSetter } from '@/setter/ContenteditableSetter'

const classes = {
  marginBox: css({
    height: 250,
    display: "flex",
    flexDirection: "column",
  }),
  marginText: css({
    width: `100%`,
    display: `flex`,
    justifyContent: `center`,
    padding: `0px 12px`
  }),
  marginCenter: css({
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  paddingBox: css({
    height: `100%`,
    width: `100%`,
    display: "flex",
    flexDirection: "column",
    background: `#d2d3da`,
    padding: `12px`
  }),
  paddingCenter: css({
    width: `100%`,
    flex: 1,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  }),
};

export const SpaceGroupSetter = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="fontSetter" header="间距">
      <div className={classes.marginBox}>
        <div className={classes.marginText}>32px</div>
        <div className={classes.marginCenter}>
          <Form.Item noStyle >
          <ContenteditableSetter/>
          </Form.Item>
          <div className={classes.paddingBox}>
            <div className={classes.marginText}>32px</div>
            <div className={classes.paddingCenter}>
              <div>1</div>
              <div></div>
              <div>1</div>
            </div>
            <div className={classes.marginText}>32px</div>
          </div>
          <div>32px</div>
        </div>
        <div className={classes.marginText}>32px</div>
      </div>
    </Collapse.Panel>
  );
};
