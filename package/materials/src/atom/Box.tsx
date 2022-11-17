import styled from '@emotion/styled'
import { typography, space, color, layout, grid, flex, textStyle } from 'styled-system'
import { textDecoration } from "@/styled/textDecoration"

export const Box = styled('div')(
  typography,
  space,
  color,
  layout,
  grid,
  flex,
  textDecoration
)