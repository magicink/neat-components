// @flow
import { columnWidth, floatDirection } from '../Functions'
import { NeatTheme } from '../Theme/NeatTheme'

let gridColumn: Function = (theme: typeof NeatTheme, span: number): {
  width: string,
  float: string,
  'margin-left'?: string,
  'margin-right'?: string
} => {
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
