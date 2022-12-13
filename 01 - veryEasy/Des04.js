const square = (number) => {
  let numberMod = String(number)
  let numberFinal = ""
  
  for (let index = 0; index < numberMod.length; index++) {
    let numberSquare = (Number(numberMod[index]))**2
    numberFinal += String(numberSquare)
  }

  return Number(numberFinal)
}

console.log(square(3514))