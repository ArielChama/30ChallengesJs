const recursion = (number) => {
  if (number === 0) {
    return ""
  } else if(number === 1) {
    return "chuck"
  } else {
    return "chuck-" + recursion(number-1)
  }
}

console.log(recursion(0))
