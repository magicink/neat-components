import floatOppositeDirection from './floatOppositeDirection'

describe('floatOppositeDirection', () => {
  it('should handle no data', () => {
    let result = floatOppositeDirection()
    expect(result).toBe('right')
  })

  it('should handle ltr', () => {
    let result = floatOppositeDirection('ltr')
    expect(result).toBe('right')
  })

  it('should handle rtl', () => {
    let result = floatOppositeDirection('rtl')
    expect(result).toBe('left')
  })

  it('should handle unexpected data', () => {
    let result = floatOppositeDirection('test')
    expect(result).toBe(undefined)
  })
})
