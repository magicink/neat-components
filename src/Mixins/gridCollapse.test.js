import gridCollapse from './gridCollapse'
import Neat from '../Theme/Neat'

test('passing in the default grid', () => {
  let grid = new Neat()
  let result = gridCollapse(grid)
  expect(result).toEqual({
    'margin-left': '-20px',
    'margin-right': '-20px',
    width: 'calc(100% + 40px)'
  })
})

test('not passing in a direction', () => {
  let grid = new Neat()
  grid.theme.direction = undefined
  let result = gridCollapse(grid)
  expect(result).toBe(false)
})

test('passing in a % unit', () => {
  let grid = new Neat()
  grid.theme.gutter = '5%'
  let result = gridCollapse(grid)
  expect(result).toBe(false)
})
