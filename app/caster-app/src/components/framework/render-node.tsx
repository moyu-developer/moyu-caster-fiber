import * as React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ReactDOM from "react-dom";
import { Space, theme } from "antd";
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";

const ViewPortID = "#__CasterViewPort__";

export const RenderNode = ({ render }: any) => {
  const currentRef = React.useRef<HTMLDivElement>(null);
  const { token } = theme.useToken();

  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    isRootNode,
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

  const hovered = css({
    position: "relative",
    "&::after": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      border: `1px dashed ${token.colorPrimary}`,
    },
  });

  React.useEffect(() => {
    if (dom) {
      if (isHover || isActive) {
        dom.classList.add(hovered);
      } else {
        dom.classList.remove(hovered);
      }
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
    document?.querySelector(ViewPortID)?.addEventListener("scroll", scroll);

    return () => {
      document
        ?.querySelector(ViewPortID)
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
                zIndex: 1,
              }}
              className={css({
                position: "fixed",
                height: 30,
                marginTop: -29,
                fontSize: 12,
                padding: `0 ${token.paddingSM}px`,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                background: token.colorPrimary,
                color: token.colorBgBase,
              })}
              ref={currentRef}
            >
              <Space>
                {name}
                {isRootNode ? null : (
                  <CopyOutlined onClick={() => actions.add(node, parent)} />
                )}
                {isRootNode ? null : (
                  <DeleteOutlined onClick={() => actions.delete(id)} />
                )}
              </Space>
            </div>,
            document?.querySelector(ViewPortID) as Element
          )
        : null}
      {render}
    </React.Fragment>
  );
};
