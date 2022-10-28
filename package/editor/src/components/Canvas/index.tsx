import * as React from "react";
import { Frame, Element } from "@craftjs/core";
import { Container, Text } from "@caster-fiber/materials";

export const Canvas = () => {
  return (
    <div
      style={{
        height: "100%",
        width: 375
      }}
    >
      <Frame>
        <Element is={Container} height="100%" canvas >
          <Text text="111" />
        </Element>
      </Frame>
    </div>
  );
};
