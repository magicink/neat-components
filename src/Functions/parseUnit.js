// @flow
const parseUnit: Function = (value: string): string => {
  let parsedValue = parseFloat(value)
  if (parsedValue) {
    let splitValue = value.split(parsedValue.toString(10))
    return splitValue[splitValue.length - 1].trim()
  } else {
    return ''
  }
}

export default parseUnit
