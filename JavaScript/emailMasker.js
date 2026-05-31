let email = "freecodecamp@email.com"

function maskEmail (email) {

  //first character of email
  let firstChar = email.slice(0,1);
  console.log(firstChar);

  //where is the @ character?
  let at = email.indexOf("@");
  //console.log(at);

  //get characters from @ backwards
  //slice email string
  let beforeAt = email.slice (1, at);

  //convert sliced string to array
  let beforeAtArr = beforeAt.split("")
  //console.log(beforeAtArr)

  //get last char and remove from array
  let charBeforeAt = beforeAtArr.pop();
  //console.log(charBeforeAt)
  //console.log(beforeAtArr)

  //idea - create a new empty string and repeat the * sign based on length of array to append to email :) got it!!!
  let maskString = "*".repeat(beforeAtArr.length);
  //console.log(maskString)

  //get characters from @ forwards - here no change
  let afterAt = email.slice (at);
  //console.log(afterAt)
  
  //return variables
  return firstChar + maskString + charBeforeAt + afterAt
  //test return function
  //return email;
}

console.log(maskEmail(email))