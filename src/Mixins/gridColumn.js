// @flow
import { columnWidth, floatDirection } from '../Functions'
import type { Theme } from '../Theme/NeatTheme'

type Styles = {
  width: string,
  float: string,
  'margin-left'?: string,
  'margin-right'?: string
}

let gridColumn: Function = (theme: Theme, span: number): Styles => {
  const { columns, direction, gutter } = theme
  span = Math.floor(span)
  if (span > columns) {
    span = columns
  }
  return {
    width: `calc(${columnWidth(theme, span)})`,
    float: `${floatDirection(direction)}`,
    [`margin-${floatDirection(direction)}`]: gutter
  }
}

export default gridColumn
