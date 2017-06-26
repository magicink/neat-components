import parseUnit from './parseUnit'
import stripUnit from './stripUnit'

let columnWidth = ({
  grid,
  span
} = {}) => {
  const { theme: { columns, gutter } } = grid
  if (!columns || gutter === undefined) return false
  let ratio = span / columns
  let gutterValue = stripUnit(gutter)
  let gutterUnit = parseUnit(gutter)
  if (gutterValue === 0) {
    return `${ratio * 100}%`
  } else {
    let affordance = `${gutterValue + (gutterValue * ratio)}${gutterUnit}`
    return `${ratio * 100}% - ${affordance}`
  }
}

export default columnWidth
