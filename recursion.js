// Recursive Countdown
function countdown(inp) {
  console.log(inp);

  if (inp === 1) return 1;

  inp -= countdown(inp - 1);
}

countdown(7);
countdown(11);

// Recursive Sum
function sumRange(inp) {
  if (inp === 1) return 1;

  return inp + sumRange(inp - 1);
}

console.log(sumRange(6));

// Recursive Factorial
function factorial(inp) {
  if (inp === 1) return 1;
  
  return inp * factorial(inp - 1);
}

console.log(factorial(5));

