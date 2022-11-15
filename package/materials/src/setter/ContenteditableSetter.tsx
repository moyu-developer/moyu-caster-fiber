import { HexColorPicker } from "react-colorful";
import { CustomSetterFormItemProps } from "@/global";
import {
} from "antd";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useRef } from "react";

export interface ContenteditableSetterProps<T>
  extends CustomSetterFormItemProps<T> {
    validate?: RegExp
  }

export const ContenteditableSetter = (
  props: ContenteditableSetterProps<number>
) => {
  const text = useRef<number>(0);

  const handleContentEditableValueChange = (evt: ContentEditableEvent) => {
    text.current = Number(evt.target.value);
  };

  const handleContentEditableBlur = () => {

    if (!props.onChange) return;
    props.onChange(Number(text.current));
  };

  return (
    <ContentEditable
      html={String(props.value || 0)}
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
