import columnWidth from '../Functions/columnWidth'
import floatDirection from '../Functions/floatDirection'

let gridColumn = ({
  span,
  theme
} = {
  span: 1
}) => {
  const { columns, direction, gutter } = theme
  if (!columns || !direction || gutter === undefined) return false
  if (isNaN(span)) return false
  span = Math.floor(span)
  if (span > columns) span = columns
  return {
    width: `calc(${columnWidth({theme, span})})`,
    float: `${floatDirection(direction)}`,
    [`margin-${floatDirection(direction)}`]: gutter
  }
}

export default gridColumn
