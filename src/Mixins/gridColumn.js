import { columnWidth, floatDirection } from '../Functions'

let gridColumn = (theme, span = 1) => {
  const { columns, direction, gutter } = theme
  span = Math.floor(span)
  if (span > columns) span = columns
  return {
    width: `calc(${columnWidth(theme, span)})`,
    float: `${floatDirection(direction)}`,
    [`margin-${floatDirection(direction)}`]: gutter
  }
}

export default gridColumn
