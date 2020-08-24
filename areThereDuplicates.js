function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let results = {}

  for (let i = 0; i < arguments.length; i++) {
    if (!results[arguments[i]]) {
      results[arguments[i]] = 1
    } else {
      return true
    }
  }
  console.log(results)

  return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))