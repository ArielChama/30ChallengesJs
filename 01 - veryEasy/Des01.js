const average = (...numbers) => {
  let sum = 0
  sum = numbers.reduce((sum, number) => {
    return sum + number
  }, 0)

  return sum / numbers.length
}

console.log(average(20, 18, 16))
