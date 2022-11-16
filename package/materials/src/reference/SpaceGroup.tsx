import { css } from "@emotion/css";
import { Collapse, CollapsePanelProps, Form, Input, InputNumber } from "antd";
import { ContenteditableSetter } from "@/setter/ContenteditableSetter";
import { NumberOutlined } from "@ant-design/icons";

const classes = {
  marginBox: css({
    height: 200,
    display: "flex",
    flexDirection: "column",
  }),
  marginText: css({
    width: `100%`,
    display: `flex`,
    justifyContent: `center`,
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
    background: `#fafafa`,
    padding: 12,
    margin: `12px 0`,
  }),
  paddingCenter: css({
    width: `100%`,
    flex: 1,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  }),
};

export const SpaceGroupSettings = (props: Partial<CollapsePanelProps>) => {
  return (
    <Collapse.Panel {...props} key="SpaceGroupSetter" header="间距">
      <div className={classes.marginBox}>
        <div className={classes.marginText}>
          <Form.Item noStyle name="mt">
            <ContenteditableSetter />
          </Form.Item>
        </div>
        <div className={classes.marginCenter}>
          <Form.Item noStyle name="ml">
            <ContenteditableSetter />
          </Form.Item>
          <div className={classes.paddingBox}>
            <div className={classes.marginText}>
              <Form.Item noStyle name="pt">
                <ContenteditableSetter />
              </Form.Item>
            </div>
            <div className={classes.paddingCenter}>
              <Form.Item noStyle name="pl">
                <ContenteditableSetter />
              </Form.Item>
              <div>
                <NumberOutlined
                  style={{
                    fontSize: 24,
                  }}
                />
              </div>
              <Form.Item noStyle name="pr">
                <ContenteditableSetter />
              </Form.Item>
            </div>
            <div className={classes.marginText}>
              <Form.Item noStyle name="pb">
                <ContenteditableSetter />
              </Form.Item>
            </div>
          </div>
          <div>
            <Form.Item noStyle name="mr">
              <ContenteditableSetter />
            </Form.Item>
          </div>
        </div>
        <div className={classes.marginText}>
          <Form.Item noStyle name="mb">
            <ContenteditableSetter />
          </Form.Item>
        </div>
      </div>
    </Collapse.Panel>
  );
};
