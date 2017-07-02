import floatDirection from './floatDirection'

describe('floatDirection()', () => {
  it('should handle no data', () => {
    let result = floatDirection()
    expect(result).toBe('left')
  })

  it('should handle ltr', () => {
    let result = floatDirection('ltr')
    expect(result).toBe('left')
  })

  it('should handle rtl', () => {
    let result = floatDirection('rtl')
    expect(result).toBe('right')
  })

  it('should handle unexpected data', () => {
    let result = floatDirection('test')
    expect(result).toBe('left')
  })
})
