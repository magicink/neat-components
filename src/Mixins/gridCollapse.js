import floatDirection from '../Functions/floatDirection'
import floatOppositeDirection from '../Functions/floatOppositeDirection'
import parseUnit from '../Functions/parseUnit'
import stripUnit from '../Functions/stripUnit'

let gridCollapse = (grid) => {
  const { theme: { direction, gutter } } = grid
  if (!direction || !gutter) return false
  let gutterUnit = parseUnit(gutter)
  if (gutterUnit === '%') return false
  let gutterValue = stripUnit(gutter)
  return {
    [`margin-${floatDirection(direction)}`]: `-${gutter}`,
    [`margin-${floatOppositeDirection(direction)}`]: `-${gutter}`,
    width: `calc(100% + ${gutterValue * 2}${gutterUnit})`
  }
}

export default gridCollapse
