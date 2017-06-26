let stripUnit = (value) => {
  const unitlessValue = parseFloat(value)
  if (isNaN(unitlessValue)) return value
  return unitlessValue
}

export default stripUnit
