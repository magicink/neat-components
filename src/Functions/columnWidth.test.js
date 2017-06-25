import columnWidth from './columnWidth'

test('passing in 10 columns, 0 gutter, 2 span', () => {
  let result = columnWidth({
    grid: {
      theme: {
        columns: 10,
        gutter: 0
      }
    },
    span: 2
  })
  expect(result).toBe('20%')
})

test('passing in 10 columns, 10px gutter, 2 span', () => {
  let result = columnWidth({
    grid: {
      theme: {
        columns: 10,
        gutter: '10px'
      }
    },
    span: 2
  })
  expect(result).toBe('20% - 12px')
})

test('passing in malformed grid', () => {
  let result = columnWidth({
    grid: { theme: {} },
    span: 2
  })
  expect(result).toBe(false)
})
