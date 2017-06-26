import columnWidth from '../Functions/columnWidth'
import floatDirection from '../Functions/floatDirection'
import parseUnit from '../Functions/parseUnit'
import { stripUnit } from 'polished'

let gridPush = (push = 0, grid) => {
  const { theme: { direction, gutter } } = grid
  let column = {}
  if (push > 0) {
    let gutterValue = stripUnit(gutter)
    let gutterUnit = parseUnit(gutter)
    let affordance = `${gutterValue * 2}${gutterUnit}`
    column[`margin-${floatDirection(direction)}`] = `
      calc(${columnWidth({grid, span: push})} + ${affordance})
    `.replace(/\s+/g, ' ').trim()
  } else {
    column[`margin-${floatDirection(direction)}`] = gutter
  }
  return column
}

export default gridPush
