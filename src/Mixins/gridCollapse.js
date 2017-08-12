// @flow
import {
  floatDirection,
  floatOppositeDirection,
  parseUnit,
  stripUnit
} from '../Functions'
import { NeatTheme } from '../Theme/Neat'

let gridCollapse: Function = (theme: typeof NeatTheme): {
  'margin-left'?: string,
  'margin-right'?: string,
  width?: string
} => {
  const { direction, gutter } = theme
  if (!direction || !gutter) return {}
  let gutterUnit = parseUnit(gutter)
  if (gutterUnit === '%') return {}
  let gutterValue = stripUnit(gutter)
  return {
    [`margin-${floatDirection(direction)}`]: `-${gutter}`,
    [`margin-${floatOppositeDirection(direction)}`]: `-${gutter}`,
    width: `calc(100% + ${gutterValue * 2}${gutterUnit})`
  }
}

export default gridCollapse
