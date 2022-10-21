import { Container } from './View'
import { Settings } from './Settings'

Container.craft = {
  displayName: "Text",
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag",
  },
  related: {
    settings: Settings
  }
}

export default Container