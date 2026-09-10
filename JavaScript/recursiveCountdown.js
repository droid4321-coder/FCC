function countdown(number) {

  let arr = [];
  if (number < 1) {
    return [];
  } else {
    arr = countdown(number - 1)
    arr.unshift(number)
    return arr
  }
}

console.log(countdown(1337))