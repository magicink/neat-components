import parseUnit from './parseUnit'

test('should handle the typical use case', () => {
  let result = parseUnit('12px')
  expect(result).toBe('px')
})

test('should handle a space between the number and unit', () => {
  let result = parseUnit('12 px')
  expect(result).toBe('px')
})

test('should handle no unit', () => {
  let result = parseUnit('12')
  expect(result).toBe('')
})

test('should handle no data', () => {
  let result = parseUnit()
  expect(result).toBe('')
})

test('should handle % signs', () => {
  let result = parseUnit('5%')
  expect(result).toBe('%')
})
