import floatDirection from '../Functions/floatDirection'
import floatOppositeDirection from '../Functions/floatOppositeDirection'
import parseUnit from '../Functions/parseUnit'
import { stripUnit } from 'polished'

let gridCollapse = (grid) => {
  const { theme: { direction, gutter } } = grid
  if (!direction || !gutter) return false
  let gutterUnit = parseUnit(gutter)
  if (gutterUnit === '%') return false
  let gutterValue = stripUnit(gutter)
  let column = {}
  column[`margin-${floatDirection(direction)}`] = `-${gutter}`
  column[`margin-${floatOppositeDirection(direction)}`] = `-${gutter}`
  column['width'] = `calc(100% + ${gutterValue * 2}${gutterUnit})`
  return column
}

export default gridCollapse
