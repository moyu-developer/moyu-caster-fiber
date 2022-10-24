import { Text } from './View'
import { Settings } from './Settings'

Text.craft = {
  displayName: "文本",
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag",
  },
  related: {
    settings: Settings,
  }
}

export default Text