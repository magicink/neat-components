import columnWidth from '../Functions/columnWidth'
import floatDirection from '../Functions/floatDirection'
import parseUnit from '../Functions/parseUnit'
import stripUnit from '../Functions/stripUnit'

let gridPush = (push = 0, grid) => {
  const { theme: { direction, gutter } } = grid
  if (push > 0) {
    let gutterValue = stripUnit(gutter)
    let gutterUnit = parseUnit(gutter)
    let affordance = `${gutterValue * 2}${gutterUnit}`
    return {
      [`margin-${floatDirection(direction)}`]: `
        calc(${columnWidth({grid, span: push})} + ${affordance})
      `.replace(/\s+/g, ' ').trim()
    }
  } else {
    return {
      [`margin-${floatDirection(direction)}`]: gutter
    }
  }
}

export default gridPush
