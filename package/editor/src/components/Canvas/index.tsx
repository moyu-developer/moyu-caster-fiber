import * as React from "react";
import { Frame, Element } from "@craftjs/core";
import { Container, Text } from "@caster-fiber/materials";

export const Canvas = () => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Frame>
        <Element is={Container} canvas >
          <Text text="111" />
        </Element>
      </Frame>
    </div>
  );
};
