import { Container } from './View'
import { Settings } from './Settings'

Container.craft = {
  displayName: "基础容器",
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag",
  },
  related: {
    settings: Settings,
  }
}

export default Container