import Neat from './Neat'

test('the default result', () => {
  const result = {
    ...(new Neat())
  }
  expect(result.theme.color).toEqual(null)
  expect(result.theme.columns).toEqual(12)
  expect(result.theme.direction).toEqual('ltr')
  expect(result.theme.gutter).toEqual('20px')
  expect(result.theme.media).toEqual(null)
})
