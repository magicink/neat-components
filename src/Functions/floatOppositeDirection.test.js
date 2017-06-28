import floatOppositeDirection from './floatOppositeDirection'

test('should handle no data', () => {
  let result = floatOppositeDirection()
  expect(result).toBe('right')
})

test('should handle ltr', () => {
  let result = floatOppositeDirection('ltr')
  expect(result).toBe('right')
})

test('should handle rtl', () => {
  let result = floatOppositeDirection('rtl')
  expect(result).toBe('left')
})

test('should handle unexpected data', () => {
  let result = floatOppositeDirection('test')
  expect(result).toBe(undefined)
})
