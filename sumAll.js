// Given an input, add all the numbers from 1 to the input

// Big O: O(f(n) = 1)
function addUp(n) {
  return n * (n + 1) / 2
}

console.log(addUp(10))
console.log(addUp(5))

// Big O: O(f(n))
function addUp(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

console.log(addUp(10))
console.log(addUp(5))