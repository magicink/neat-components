let parseUnit = (value) => {
  let parsedValue = parseFloat(value)
  if (parsedValue) {
    let splitValue = value.split(parsedValue)
    return splitValue[splitValue.length - 1].trim()
  } else {
    return ''
  }
}

export default parseUnit
