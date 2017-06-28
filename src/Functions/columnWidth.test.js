import columnWidth from './columnWidth'

test('should handle a gutter of 0', () => {
  let result = columnWidth({ columns: 10, gutter: 0 }, 2)
  expect(result).toBe('20%')
})

test('should handle a non-zero gutter', () => {
  let result = columnWidth({ columns: 10, gutter: '10px' }, 2)
  expect(result).toBe('20% - 12px')
})

test('should handle a malformed grid', () => {
  let result = columnWidth({}, 2)
  expect(result).toBe(false)
})
