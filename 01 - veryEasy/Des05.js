const largerLetther = (text) => {
  let larger = ""
  let textMin = text.toLocaleLowerCase()
  
  for (let index = 0; index < text.length; index++) {
    if (textMin[index] > larger) {
      larger = textMin[index]
    }
  }

  return larger
}

console.log(largerLetther("Hello"))