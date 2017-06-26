import columnWidth from '../Functions/columnWidth'
import floatDirection from '../Functions/floatDirection'

let gridColumn = ({
  span,
  grid
} = {
  span: 1
}) => {
  const { theme: { columns, direction, gutter } } = grid
  if (!columns || !direction || gutter === undefined) return false
  if (isNaN(span)) return false
  span = Math.floor(span)
  if (span > columns) span = columns
  return {
    width: `calc(${columnWidth({grid, span})})`,
    float: `${floatDirection(direction)}`,
    [`margin-${floatDirection(direction)}`]: gutter
  }
}

export default gridColumn
