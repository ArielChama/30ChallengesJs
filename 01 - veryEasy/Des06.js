const revertLetter = (text) => {
  let words = text.toLowerCase().split(" ")

  const wordsInverted = words.map(word => word.split("").reverse().join(""))

  return wordsInverted.join(" ")
}

console.log(revertLetter("Eu Ariel Chama"))