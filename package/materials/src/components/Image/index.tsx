import { UserComponent as MaterialComponent, useNode } from "@craftjs/core";

export interface ImageViewProps {}

export const ImageView: MaterialComponent<ImageViewProps> = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <img
      ref={(ref: HTMLImageElement) => connect(drag(ref))}
      width="100%"
      height="100%"
      src="https://th.bing.com/th/id/R.ffcf86aef42dcd02e13f6b2c61187426?rik=EjM03sjkw0qnaQ&pid=ImgRaw&r=0"
    />
  );
};

ImageView.craft = {
  displayName: "图片",
  custom: {
    icon: "",
  },
  related: {},
};
