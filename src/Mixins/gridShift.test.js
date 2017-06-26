import gridShift from './gridShift'
import Neat from '../Theme/Neat'

test('passing 1 shift', () => {
  let grid = new Neat()
  let result = gridShift(1, grid.theme)
  expect(result).toEqual({
    left: 'calc(8.333333333333332% - 21.666666666666668px + 20px)'
  })
})

test('passing 0 shift', () => {
  let grid = new Neat()
  let result = gridShift(0, grid.theme)
  expect(result).toEqual({
    left: '20px'
  })
})

test('passing in a malformed grid', () => {
  let grid = new Neat()
  grid.theme.gutter = undefined
  let result = gridShift(1, grid)
  expect(result).toBe(false)
})
