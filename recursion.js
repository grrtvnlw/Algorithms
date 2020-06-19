// Recursive Countdown
function countdown(inp) {
  console.log(inp);

  if (inp === 1) return 1;

  inp -= countdown(inp - 1);
}

// countdown(7);
// countdown(11);

// Recursive Sum
function sumRange(inp) {
  if (inp === 1) return 1;

  return inp + sumRange(inp - 1);
}

// console.log(sumRange(6));

// Recursive Factorial
function factorial(inp) {
  if (inp === 1) return 1;
  
  return inp * factorial(inp - 1);
}

// console.log(factorial(5));

// Product of an Array
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr.shift() * productOfArray(arr);
}

console.log(productOfArray([1,2,3]))

// Searching a JSON object recursively
function contains(obj, searchValue) {

  let isFound = false;

  function helper(obj, searchValue) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        for (let item of obj[key]) {
          if (item === searchValue) {
            isFound = true;
          }
        }
      } else if (typeof obj[key] === 'object') {
        helper(obj[key], searchValue)
      } else if (obj[key] === searchValue) {
        isFound = true;
      }
    }
  }
  helper(obj, searchValue)

  return isFound
}

let nestedObject = { data: {
  info: {
    stuff: {
      thing: {
        moreStuff: {
          magicNumber: 44,
          something: 'foo2'
        }
      }
    },
    morestuff: {
      thing: {
        moreStuff2: {
          magicNumber: 445,
          something: 'foobar'
        }
      }
    },
    evenmore: {
      thing: {
        moreStuff2: {
          magicNumber: [9,6,7,5000],
          something: 'foobar'
        }
      }
    },
  }
}};

console.log(contains(nestedObject, 7));