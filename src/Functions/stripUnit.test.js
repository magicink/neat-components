import stripUnit from './stripUnit'

test('should return 12 (int)', () => {
  let result = stripUnit('12px')
  expect(result).toBe(12)
})

test('should return px', () => {
  let result = stripUnit('px')
  expect(result).toBe('px')
})
