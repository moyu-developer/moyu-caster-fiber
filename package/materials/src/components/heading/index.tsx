import { Heading, HeadingProps } from "@chakra-ui/react";
import { useNode, UserComponent } from "@craftjs/core";
import Settings from "./settings";

export const Title: UserComponent<HeadingProps> = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Heading ref={(ref) => connect(drag(ref as HTMLElement))} {...props}>
      {props.children}
    </Heading>
  );
};

Title.craft = {
  name: "Title",
  displayName: "标题",
  props: {
    children: "默认标题",
  },
  related: {
    settings: Settings,
  },
};
