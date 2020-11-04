// recursive fibonacci with memoization

const fibonacci = (function () {
  let memo = {};

  function f(n) {
    let value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) {
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
      }

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

console.log(fibonacci(10))

// recursive fibonacci with memoization and multi-dimensional cache

const fibonacci = (function () {
  let memo = {};

  function f(x, n) {
    let value;

    memo[x] = memo[x] || {};

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) {
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
      }

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

console.log(fibonacci(10))