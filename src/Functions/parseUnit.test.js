import parseUnit from './parseUnit'

test('passing in 12px', () => {
  let result = parseUnit('12px')
  expect(result).toBe('px')
})

test('passing in 12 px', () => {
  let result = parseUnit('12 px')
  expect(result).toBe('px')
})

test('passing in 12', () => {
  let result = parseUnit('12')
  expect(result).toBe('')
})

test('passing in nothing', () => {
  let result = parseUnit()
  expect(result).toBe('')
})

test('passing in a percentage', () => {
  let result = parseUnit('5%')
  expect(result).toBe('%')
})
