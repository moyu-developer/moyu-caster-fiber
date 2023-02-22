import { Text as BaseText, TextProps } from '@chakra-ui/react'
import { useNode, UserComponent } from '@craftjs/core'

export const Text: UserComponent<TextProps> = ({children, ...props}) => {

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <BaseText ref={(ref) => connect(drag(ref as HTMLElement))} {...props}>{children}</BaseText>
  )
}

Text.craft = {
  displayName: '文本',
  props: {
    children: '示例文本'
  }
}