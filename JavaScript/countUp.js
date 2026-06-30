//this recursion stuff is interesting, gonna console.log everything

function countup(number) {
  let countArray = [];
  if (number < 1) {
    return [];
  } else {
    countArray = countup(number - 1);
    console.log("Step 1: " + countArray);
    countArray.push(number);
    console.log("Step 2: " + countArray + "\n")
    return countArray;
  }
}

console.log(countup(5))