import * as React from "react";
import { Frame, Element, useEditor } from "@craftjs/core";
import { Container, Text } from "@caster-fiber/materials";
import { Toolbox } from "../ToolBox";
import { useStyles } from "./useStyles";
import { useEditorData } from "@/state/useEditorData";
import { hasJSON } from '@/utils'
import lz from "lzutf8";

export const Canvas = () => {
  const { data } = useEditorData();
  const { actions } = useEditor();
  const styles = useStyles();

  React.useEffect(() => {
    let json;
    if (data?.state) {
      json = lz.decompress(lz.decodeBase64(data?.state));
    }
    if (hasJSON(json)) {
      actions.deserialize(json);
    }
  }, [data?.state]);

  return (
    <div className={styles.wrap} id="Canvas">
      <Toolbox />
      <div id="ViewPort" className={styles.canvas}>
        <Frame>
          <Element
            canvas
            is={Container}
            width={800}
            height="100%"
            paddingTop={20}
            paddingBottom={20}
            paddingLeft={20}
            paddingRight={20}
            background="#FFFFFF"
            flexDirection="column"
          />
        </Frame>
      </div>
    </div>
  );
};
