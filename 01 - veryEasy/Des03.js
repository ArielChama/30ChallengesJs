const reverse = (...list) => {
  const reversedList = []

  for (let index = 0; index < list.length; index++) {
    reversedList[index] = list[list.length - 1 - index]
  }

  return reversedList
}

console.log(reverse(1, 2, 3, 4, 5, 6))