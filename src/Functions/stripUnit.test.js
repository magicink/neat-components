import stripUnit from './stripUnit'

describe('stripUnit()', () => {
  it('should return 12 (int)', () => {
    let result = stripUnit('12px')
    expect(result).toBe(12)
  })
  it('should return px', () => {
    let result = stripUnit('px')
    expect(result).toBe('px')
  })
})
