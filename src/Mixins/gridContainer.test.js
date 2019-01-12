import gridContainer from './gridContainer'

describe('gridContainer()', () => {
  it('should return the correct object', () => {
    const result = gridContainer()
    expect('&::after' in result).toBe(true)
    expect(result).toEqual({
      '&::after': {
        clear: 'both',
        content: '""',
        display: 'block'
      }
    })
  })
  it('should return the correct object', () => {
    const result = gridContainer('test')
    expect('test::after' in result).toBe(true)
  })
})
