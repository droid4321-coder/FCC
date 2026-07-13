function sumAll(arr) {

  //2 number array validation
  if (arr.length !== 2 || !Array.isArray(arr)) {
    return "You need to input an array of 2 numbers.";
  }

  const initialValue = 0;
  let newArr = [];
  let sum = 0;

  if (arr[0] < arr[1]) {
    for(let i = arr[0]; i <= arr[1]; i++) {
      //console.log(i);
      newArr.push(i)
    }
  } else {
    for(let i = arr[0]; i >= arr[1]; i--) {
      //console.log(i);
      newArr.push(i);    
    }
  }

  //console.log(`Array -> ${newArr}`)

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  //console.log(sum)
  return sum;
}

console.log(sumAll([1,3]))