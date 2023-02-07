import * as React from "react";
import { Card, Layout, Spin, theme } from "antd";
import { Frame, Element, useEditor } from "@craftjs/core";
import { Container } from "@caster-fiber/materials";
import { css } from "@emotion/css";

export function Canvas(): JSX.Element {
  const { token } = theme.useToken();

  return (
    <Layout.Content
      className={css({
        padding: token.paddingMD,
        height: "100%",
        overflow: 'scroll'
      })}
    >
      <div
        id="__CasterViewPort__"
        className={css({
          height: "100%",
        })}
      >
        <Frame>
          <Element
            canvas
            is={Container}
            style={{
              background: token.colorBgBase,
              height: '100%'
            }}
          />
        </Frame>
      </div>
    </Layout.Content>
  );
}
