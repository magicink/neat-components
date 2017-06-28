import parseMedia from './parseMedia'

test('should handle numbers', () => {
  let result = parseMedia(12)
  expect(result).toBe('only screen and (min-width: 12px)')
})
test('should handle strings', () => {
  let media = 'only screen and handle (max-width: 300px)'
  let result = parseMedia(media)
  expect(result).toBe(media)
})
