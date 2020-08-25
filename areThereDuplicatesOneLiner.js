function areThereDuplicatesOneLiner() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesOneLiner(1, 2, 3))
console.log(areThereDuplicatesOneLiner(1, 2, 2))
console.log(areThereDuplicatesOneLiner('a', 'b', 'c', 'a'))