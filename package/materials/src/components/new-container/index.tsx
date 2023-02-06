import * as React from 'react';
import { UserComponent } from "@craftjs/core";
import { Resizable, ResizeCallback } from "re-resizable";
import { IndicatorRound } from './Indicators'
import { useEditor, useNode } from '@craftjs/core'
import { default as Settings } from './settings'

export interface ContainerV2Props {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode
}

export const ContainerV2: UserComponent<ContainerV2Props> = (props) => {

  const resizable = React.useRef<any>(null);

  const {
    id,
    actions: { setProp },
    connectors: { connect },
    parent,
    active,
    inNodeContext,
  } = useNode((node) => ({
    parent: node.data.parent,
    active: node.events.selected,
  }));

  const handleResizableChange: ResizeCallback = (event, direction, elRef, delta) => {
    const { width, height } = elRef.style
    console.log(width, height, 'handleResizableChange')
    setProp((prop: Record<string, any>) => {
      prop.width = width
      prop.height = height
    }, 400)
  }

  return (
    <Resizable
      style={{...props?.style}}
      defaultSize={{
        width: "100%",
        height: "100%",
      }}
      bounds="parent"
      enable={{
        left: false,
        right: false,
        top: false,
        bottom: false,
        topLeft: true,
        topRight: true,
        bottomLeft: true,
        bottomRight: true
      }}
      ref={(ref) => {
        if (ref) {
          resizable.current = ref;
          connect(resizable.current.resizable);
        }
      }}
      onResize={handleResizableChange}
    >
      {props.children}
      <IndicatorRound show={active} />
    </Resizable>
  );
};

ContainerV2.craft = {
  displayName: "基础容器",
  related: {
    settings: Settings
  },
};
