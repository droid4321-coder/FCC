const num = 5;
/*

1. Make an array that hold selected value sorted from big to small.

2. Multiply each number in that array

3. print it :)

*/
function factorialCalculator(num) {

  //empty array and empty sum
  let arr = [];
  let fc = 1;

  //make an array of numbrs in arr
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  
  //loop to multiply each value
  for (let i = 0; i < arr.length; i++) {
    fc *= arr[i];
  }
  return fc;
}

const factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)