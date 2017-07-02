import parseUnit from './parseUnit'

describe('parseUnit()', () => {
  it('should handle the typical use case', () => {
    let result = parseUnit('12px')
    expect(result).toBe('px')
  })

  it('should handle a space between the number and unit', () => {
    let result = parseUnit('12 px')
    expect(result).toBe('px')
  })

  it('should handle no unit', () => {
    let result = parseUnit('12')
    expect(result).toBe('')
  })

  it('should handle no data', () => {
    let result = parseUnit()
    expect(result).toBe('')
  })
})

test('should handle % signs', () => {
  let result = parseUnit('5%')
  expect(result).toBe('%')
})
