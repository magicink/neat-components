import gridColumn from './gridColumn'
import Neat from '../Theme/Neat'

// test('passing in the default grid', () => {
//   let grid = new Neat()
//   let result = gridColumn({theme: grid.theme, span: 2})
// })

// test('passing in a grid with no columns', () => {
//   let result = gridColumn({ grid: { theme: { gutter: 0 } }, span: 2 })
//   expect(result).toBe(false)
// })

test('passing in more spans than columns', () => {
  let grid = new Neat()
  grid.theme.gutter = 0
  let result = gridColumn({theme: grid.theme, span: 14})
  expect(result).toEqual({
    float: 'left',
    'margin-left': 0,
    width: 'calc(100%)'
  })
})

test('passing in a non-numeric span', () => {
  let grid = new Neat()
  let result = gridColumn({theme: grid.theme, span: 'a'})
  expect(result).toBe(false)
})
