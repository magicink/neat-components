import Neat from './Neat'

test('should return the default values', () => {
  const result = {
    ...(new Neat())
  }
  expect(result.color).toBe(null)
  expect(result.columns).toBe(12)
  expect(result.direction).toBe('ltr')
  expect(result.gutter).toBe('20px')
  expect(result.media).toBe(null)
})

test('should return a mix of default values with custom values', () => {
  const result = {
    ...(new Neat({
      color: 'blue',
      media: 1000,
      gutter: '10px'
    }))
  }
  expect(result.color).toBe('blue')
  expect(result.columns).toBe(12)
  expect(result.direction).toBe('ltr')
  expect(result.gutter).toBe('10px')
  expect(result.media).toBe(1000)
})
