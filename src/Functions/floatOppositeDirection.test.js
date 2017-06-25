import floatOppositeDirection from './floatOppositeDirection'

test('passing in nothing', () => {
  let result = floatOppositeDirection()
  expect(result).toBe('right')
})

test('passing in ltr', () => {
  let result = floatOppositeDirection('ltr')
  expect(result).toBe('right')
})

test('passing in rtl', () => {
  let result = floatOppositeDirection('rtl')
  expect(result).toBe('left')
})

test('passing in anything', () => {
  let result = floatOppositeDirection('test')
  expect(result).toBe(undefined)
})
