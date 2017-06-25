let floatOppositeDirection = (direction = 'ltr') => {
  if (direction === 'ltr') {
    return 'right'
  }
  if (direction === 'rtl') {
    return 'left'
  }
}

export default floatOppositeDirection
