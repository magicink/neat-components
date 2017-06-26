import columnWidth from '../Functions/columnWidth'
import floatDirection from '../Functions/floatDirection'

let gridShift = (shift = 0, grid) => {
  const { theme: { direction, gutter } } = grid
  if (!direction || gutter === undefined) return false
  let column = {}
  if (shift > 0) {
    let width = columnWidth({grid, span: shift})
    column[`${floatDirection(direction)}`] = `
      calc(${width} + ${gutter})
    `.replace(/\s+/g, ' ').trim()
  } else {
    column[`${floatDirection(direction)}`] = gutter
  }
  return column
}

export default gridShift
