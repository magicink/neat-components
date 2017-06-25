import floatDirection from './floatDirection'

test('passing in nothing', () => {
  let result = floatDirection()
  expect(result).toBe('left')
})

test('passing in ltr', () => {
  let result = floatDirection('ltr')
  expect(result).toBe('left')
})

test('passing in rtl', () => {
  let result = floatDirection('rtl')
  expect(result).toBe('right')
})

test('passing in anything', () => {
  let result = floatDirection('test')
  expect(result).toBe('left')
})
