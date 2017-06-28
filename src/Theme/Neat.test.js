import Neat from './Neat'

test('the default result', () => {
  const result = {
    ...(new Neat())
  }
  expect(result.color).toEqual(null)
  expect(result.columns).toEqual(12)
  expect(result.direction).toEqual('ltr')
  expect(result.gutter).toEqual('20px')
  expect(result.media).toEqual(null)
})
