import gridContainer from './gridContainer'

test('the default result', () => {
  let result = gridContainer()
  expect(result).toEqual({
    '&::after': {
      clear: 'both',
      content: '',
      display: 'block'
    }
  })
})
