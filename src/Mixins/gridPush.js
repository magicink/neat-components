import {
  columnWidth,
  floatDirection,
  parseUnit,
  stripUnit
} from '../Functions'

let gridPush = (theme, push = 0) => {
  const { direction, gutter } = theme
  if (push > 0) {
    let gutterValue = stripUnit(gutter)
    let gutterUnit = parseUnit(gutter)
    let affordance = `${gutterValue * 2}${gutterUnit}`
    return {
      [`margin-${floatDirection(direction)}`]: `
        calc(${columnWidth(theme, push)} + ${affordance})
      `
    }
  } else {
    return {
      [`margin-${floatDirection(direction)}`]: gutter
    }
  }
}

export default gridPush
