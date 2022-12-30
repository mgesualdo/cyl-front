export const toggleItem = (array, item, toggleField) => {
  const isText = typeof item === "string"
  const alreadyIncluded = isInArray(array, item, toggleField)
  let newArray

  if (alreadyIncluded) {
    newArray = isText
      ? array.filter((i) => i !== item)
      : array.filter((i) => i[toggleField] !== item[toggleField])
  } else {
    newArray = array.concat(item)
  }

  return newArray
}

export const isInArray = (array, item, toggleField) => {
  const isText = typeof item === "string"
  return isText
    ? array.includes(item)
    : array.some((i) => i[toggleField] === item[toggleField])
}
