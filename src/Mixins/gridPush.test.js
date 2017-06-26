import gridPush from './gridPush'
import Neat from '../Theme/Neat'

test('passing in the default grid', () => {
  let grid = new Neat()
  let result = gridPush(1, grid.theme)
  expect(result).toEqual({
    'margin-left': 'calc(8.333333333333332% - 21.666666666666668px + 40px)'
  })
})

test('passing in 0 push', () => {
  let grid = new Neat()
  let result = gridPush(0, grid.theme)
  expect(result).toEqual({
    'margin-left': '20px'
  })
})
