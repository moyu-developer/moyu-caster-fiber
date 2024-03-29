import * as React from "react";
import { Resizable } from "re-resizable";
import { useEditor, useNode } from "@craftjs/core";
import {
  isPercentage,
  pxToPercent,
  percentToPx,
  getElementDimensions,
} from "@/utils/transPercentage";
import debounce from "lodash/debounce";
import { IndicatorRound } from "./Indicators";

export const Resizer = ({ propKey, flexDirection = 'column', children, ...props }: any) => {
  console.log(props, 'props')
  const {
    id,
    actions: { setProp },
    connectors: { connect },
    fillSpace,
    nodeWidth,
    nodeHeight,
    parent,
    active,
    inNodeContext,
  } = useNode((node) => ({
    parent: node.data.parent,
    active: node.events.selected,
    nodeWidth: node.data.props[propKey.width],
    nodeHeight: node.data.props[propKey.height],
    fillSpace: node.data.props.fillSpace,
  }));

  const { isRootNode, parentDirection } = useEditor((state, query) => {
    return {
      parentDirection:
        parent &&
        state.nodes[parent] &&
        state.nodes[parent].data.props.flexDirection,
      isRootNode: query.node(id).isRoot(),
    };
  });

  const resizable = React.useRef<any>(null);
  const isResizing = React.useRef<Boolean>(false);
  const editingDimensions = React.useRef<any>(null);
  const nodeDimensions = React.useRef<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  nodeDimensions.current = { width: nodeWidth, height: nodeHeight };

  const [internalDimensions, setInternalDimensions] = React.useState({
    width: nodeWidth,
    height: nodeHeight,
  });

  const updateInternalDimensionsInPx = React.useCallback(() => {
    const { width: nodeWidth, height: nodeHeight } = nodeDimensions.current;
    let height, width;

    if (resizable.current) {
      width =
        nodeWidth &&
        percentToPx(
          nodeWidth,
          getElementDimensions(resizable.current?.resizable?.parentElement)
            .width
        );
      height =
        nodeHeight &&
        percentToPx(
          nodeHeight,
          getElementDimensions(resizable.current?.resizable?.parentElement)
            .height
        );
    }
    setInternalDimensions({
      width,
      height,
    });
  }, []);

  const updateInternalDimensionsWithOriginal = React.useCallback(() => {
    const { width: nodeWidth, height: nodeHeight } = nodeDimensions.current;
    setInternalDimensions({
      width: nodeWidth,
      height: nodeHeight,
    });
  }, []);

  const getUpdatedDimensions = (width: number, height: number) => {
    const dom = resizable.current?.resizable;
    if (!dom) return;

    const currentWidth = parseInt(editingDimensions.current.width),
      currentHeight = parseInt(editingDimensions.current.height);

    return {
      width: currentWidth + width,
      height: currentHeight + height,
    };
  };

  React.useEffect(() => {
    if (!isResizing.current) updateInternalDimensionsWithOriginal();
  }, [nodeWidth, nodeHeight, updateInternalDimensionsWithOriginal]);

  React.useEffect(() => {
    const listener = debounce(updateInternalDimensionsWithOriginal, 1);
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [updateInternalDimensionsWithOriginal]);

  return (
    <Resizable
      {...props}
      size={internalDimensions}
      ref={(ref) => {
        if (ref) {
          resizable.current = ref;
          connect(resizable.current.resizable);
        }
      }}
      onResizeStart={(e) => {
        updateInternalDimensionsInPx();
        e.preventDefault();
        e.stopPropagation();
        const dom = resizable.current.resizable;
        if (!dom) return;
        editingDimensions.current = {
          width: dom.getBoundingClientRect().width,
          height: dom.getBoundingClientRect().height,
        };
        isResizing.current = true;
      }}
      style={{
        display: 'flex',
        flexDirection,
        ...props.style,
      }}
      onResize={(_, __, ___, d) => {
        const dom = resizable.current.resizable;
        let { width, height }: any = getUpdatedDimensions(d.width, d.height);
        if (isPercentage(nodeWidth))
          width =
            pxToPercent(width, getElementDimensions(dom.parentElement).width) +
            "%";
        else width = `${width}px`;

        if (isPercentage(nodeHeight))
          height =
            pxToPercent(
              height,
              getElementDimensions(dom.parentElement).height
            ) + "%";
        else height = `${height}px`;

        if (isPercentage(width) && dom.parentElement.style.width === "auto") {
          width = editingDimensions.current.width + d.width + "px";
        }

        if (isPercentage(height) && dom.parentElement.style.height === "auto") {
          height = editingDimensions.current.height + d.height + "px";
        }

        setProp((prop: any) => {
          prop[propKey.width] = width;
          prop[propKey.height] = height;
        }, 500);
      }}
      onResizeStop={() => {
        isResizing.current = false;
        updateInternalDimensionsWithOriginal();
      }}
    >
      {children}
      {active && (
        <IndicatorRound bound={fillSpace === "yes" ? parentDirection : false} />
      )}
    </Resizable>
  );
};
