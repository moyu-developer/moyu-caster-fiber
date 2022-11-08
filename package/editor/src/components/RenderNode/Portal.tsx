import { forwardRef } from "react";

export interface EditorFramePortalProps {
  name: string;
  domRef: React.LegacyRef<HTMLDivElement>
}

export const Portal = forwardRef<any, EditorFramePortalProps>((props, ref) => {
  return (
    <div ref={props.domRef} >{props.name}</div>
  )
})