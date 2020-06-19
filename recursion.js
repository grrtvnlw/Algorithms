// Recursive Countdown
function countdown(inp) {
  console.log(inp);

  if (inp === 1) return;

  inp -= countdown(inp - 1);
}

countdown(7);
countdown(11);