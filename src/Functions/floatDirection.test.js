import floatDirection from './floatDirection'

test('should handle no data', () => {
  let result = floatDirection()
  expect(result).toBe('left')
})

test('should handle ltr', () => {
  let result = floatDirection('ltr')
  expect(result).toBe('left')
})

test('should handle rtl', () => {
  let result = floatDirection('rtl')
  expect(result).toBe('right')
})

test('should handle unexpected data', () => {
  let result = floatDirection('test')
  expect(result).toBe('left')
})
