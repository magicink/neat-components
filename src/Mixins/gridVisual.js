import columnWidth from '../Functions/columnWidth'

let gridVisual = (grid) => {
  let { theme: { color, gutter } } = grid
  if (!gutter) return false
  color = color || ''
  return {
    'background-image': `
      repeating-linear-gradient(
        to right, transparent, transparent,
        ${color} ${gutter},
        ${color} calc(${columnWidth({grid, span: 1})} + ${gutter})
      )
    `.replace(/\s+/g, ' ').trim()
  }
}

export default gridVisual
