import * as React from "react";
import { Frame, Element } from "@craftjs/core";
import { Container, Text } from "@caster-fiber/materials";
import { Toolbox } from '../ToolBox'
import { useStyles } from "./useStyles";

export const Canvas = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrap}>
      <Toolbox/>
      <div id="ViewPort" className={styles.canvas}>
        <Frame>
          <Element is={Container} height="100%" canvas>
            <Text text="111" />
          </Element>
        </Frame>
      </div>
    </div>
  );
};
