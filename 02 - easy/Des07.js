const organizer = (numbers) => {
  let arrayCompleted = []

  numbers.map(list => arrayCompleted.push(...list));

  return arrayCompleted.sort((a, b) => a - b)
}

console.log(organizer([[4, 6, 2], [3, 1, 8]]))
