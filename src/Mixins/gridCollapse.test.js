import gridCollapse from './gridCollapse'

describe('gridCollapse()', () => {
  it('should return the correct object', () => {
    let result = gridCollapse({
      direction: 'ltr',
      gutter: '20px'
    })
    expect(result).toEqual({
      'margin-left': '-20px',
      'margin-right': '-20px',
      width: `calc(100% + 40px)`
    })
  })
  it('should return an empty object if % is passed into the gutter', () => {
    let result = gridCollapse({
      direction: 'ltr',
      gutter: '20%'
    })
    expect(result).toEqual({})
  })
  it('should return an empty object when direction or columns are undefined', () => {
    let result = gridCollapse({
      direction: undefined,
      gutter: '20px'
    })
    expect(result).toEqual({})
    result = gridCollapse({
      driection: 'ltr',
      gutter: undefined
    })
    expect(result).toEqual({})
  })
})
