import gridVisual from './gridVisual'
import Neat from '../Theme/Neat'

test('passing in the default grid', () => {
  let grid = new Neat()
  let result = gridVisual(grid.theme)
  expect(result).toEqual({
    'background-image': 'repeating-linear-gradient( to right, transparent, transparent, 20px, calc(8.333333333333332% - 21.666666666666668px + 20px) )'
  })
})

test('passing in a malformed grid', () => {
  let grid = new Neat()
  grid.theme.gutter = undefined
  let result = gridVisual(grid.theme)
  expect(result).toEqual(false)
})
