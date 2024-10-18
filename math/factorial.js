// function factorial(n) {
//   let result = 1;

//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }

//   return result;
// }

// function factorial(n) {
//   let result = 1;
//
//   for (let i = n; i >= 1; i--) {
//     result *= i;
//   }
//
//   return result;
// }
//
// console.log(factorial(5)); // 120

function factorial(n) {
  let result = 1

  for (let i = n; i >= 1; i--) {
    result *= i
  }

  return result
}
