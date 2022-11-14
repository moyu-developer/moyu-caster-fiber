import { HexColorPicker } from "react-colorful";
import { CustomSetterFormItemProps } from "@/global";
import {
} from "antd";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useRef } from "react";

export interface ContenteditableSetterProps<T>
  extends CustomSetterFormItemProps<T> {}

export const ContenteditableSetter = (
  props: ContenteditableSetterProps<string>
) => {
  const text = useRef<string>("");

  const handleContentEditableValueChange = (evt: ContentEditableEvent) => {
    text.current = evt.target.value;
  };

  const handleContentEditableBlur = () => {
    if (!props.onChange) return;
    props.onChange(text.current);
  };

  return (
    <ContentEditable
      html={props.value || '0'}
      tagName="div"
      onBlur={handleContentEditableBlur}
      onChange={handleContentEditableValueChange}
      style={{
        minWidth: `3em`,
        textAlign: "center",
      }}
    />
  );
};
