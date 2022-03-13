const getBubbleSortAnimations = inputArr => {
  const animations = []
  let len = inputArr.length
  let checked
  do {
    checked = false
    for (let i = 0; i < len; i++) {
      if (i + 1 < len) {
        animations.push([i, i + 1])
        animations.push([i, i + 1])
      } else {
        animations.push([i, i])
        animations.push([i, i])
      }

      if (inputArr[i] > inputArr[i + 1]) {
        animations.push([i, inputArr[i + 1]])
        let tmp = inputArr[i]
        inputArr[i] = inputArr[i + 1]
        inputArr[i + 1] = tmp
        checked = true
      } else {
        animations.push([i, inputArr[i]])
      }
    }
  } while (checked)
  return animations
}

export default getBubbleSortAnimations
