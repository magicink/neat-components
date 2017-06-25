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
