const shortensNames = (fullName) => {
  let names = fullName.split(" ")
  let lastName = (names.pop()).toUpperCase()
  
  const shortens = names.map(name => {
    return ` ${name[0]}.`
  })

  return `${lastName},${shortens}`
}

console.log(shortensNames("Mariano André Katemo"));
console.log(shortensNames("José Rui Pedro"));