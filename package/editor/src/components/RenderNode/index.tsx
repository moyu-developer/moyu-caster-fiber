import * as React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ReactDOM from "react-dom";
import { useStyles } from "./useStyles";
import { Space, Typography } from "antd";
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";

export const RenderNode = ({ render }: any) => {
  const currentRef = React.useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    isRootNode,
    moveable,
    deletable,
    connectors: { drag },
    parent,
    node,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    isRootNode: query.node(id).isRoot(),
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
    node,
  }));

  React.useEffect(() => {
    if (dom) {
      if (isActive) dom.classList.add(classes.hovered, classes.selected);
      if (isHover) dom.classList.add(classes.hovered)
      else dom.classList.remove(classes.hovered, classes.selected);
    }
  }, [dom, isActive, isHover]);

  const getPos = React.useCallback((dom: HTMLElement | null) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = React.useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom as HTMLElement);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  React.useEffect(() => {
    document
      ?.querySelector(".craftjs-renderer")
      ?.addEventListener("scroll", scroll);

    return () => {
      document
        ?.querySelector(".craftjs-renderer")
        ?.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <React.Fragment>
      {isActive
        ? ReactDOM.createPortal(
            <div
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
              className={classes.portal}
              ref={currentRef}
            >
              <Space>
                {name}
                {isRootNode ? null : <CopyOutlined onClick={() => actions.add(node, parent)} />}
                {isRootNode ? null : (
                  <DeleteOutlined onClick={() => actions.delete(id)} />
                )}
              </Space>
            </div>,
            document?.querySelector("#ViewPort") as Element
          )
        : null}
      {render}
    </React.Fragment>
  );
};
