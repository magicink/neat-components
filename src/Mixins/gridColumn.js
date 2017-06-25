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
  let column = {}
  column['width'] = `calc(${columnWidth({grid, span})})`
  column['float'] = `${floatDirection(direction)}`
  column[`margin-${floatDirection(direction)}`] = gutter
  return column
}

export default gridColumn
