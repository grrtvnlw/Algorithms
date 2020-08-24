function sameFrequency(one, two) {
  // good luck. Add any arguments you deem necessary.
  let result = {}
  one = one.toString().split('')
  two = two.toString().split('')

  for (let i = 0; i < one.length; i++) {
    number = one[i]
    result[number] ? result[number]++ : result[number] = 1
  }

  for (let i = 0; i < two.length; i++) {
    number = two[i]
    if (!result[number]) {
      return false
    } else {
      result[number]--
    }
  }

  return true

}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))