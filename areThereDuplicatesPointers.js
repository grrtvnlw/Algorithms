function areThereDuplicatesPointers(...args) {
  // Two pointers
  args.sort();
  
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++
    next++
  }

  return false;

}

console.log(areThereDuplicatesPointers(1, 2, 3))
console.log(areThereDuplicatesPointers(1, 2, 2))
console.log(areThereDuplicatesPointers('a', 'b', 'c', 'a'))