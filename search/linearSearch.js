function linearSearch(arr, target) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }

  return -1
}

// Big-O = O(n)

console.log(linearSearch([1, 2, 5, 8, 10], 2)); // 1
console.log(linearSearch([1, 2, 5, 8, 10], 8)); // 3
console.log(linearSearch([1, 2, 5, 8, 10], 0)); // -1
