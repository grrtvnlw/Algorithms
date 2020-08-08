// Given an input, add all the numbers from 1 to the input

// Big O: O(1)
function addUp(n) {
  return n * (n + 1) / 2
}

// Big O: O(n)
function addUp(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}