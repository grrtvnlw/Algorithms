// Write a function to remove duplicate values from a given array
function removeDuplicates(array) {
  let newArray = [];
  array.forEach(function (item) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5, 6, 6, 7]));