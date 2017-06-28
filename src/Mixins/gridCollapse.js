import {
  floatDirection,
  floatOppositeDirection,
  parseUnit,
  stripUnit
} from '../Functions'

let gridCollapse = (theme) => {
  const { direction, gutter } = theme
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
