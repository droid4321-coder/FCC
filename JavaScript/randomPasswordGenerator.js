function generatePassword (length) {

  //make an array of the characters. There are 72 characters.
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");
  //console.log(chars); // length = 72

  //new array for random password converted to string
  const passArr = [];

  //loop to push random chars of solicited length to pass array. Need to make it inside loop so it returns different characters lol
  for (let i = 0; i < length; i++) {
    const max = 72;
    const random = Math.floor(Math.random() * max);
    const randomChar = chars[random];
    passArr.push(randomChar)
  }

  //console.log(passArr);

  //check if parameter is a number and edge cases :)
  if (!Number.isFinite(length)) {
    return "Parameter must be a number";
  } else if (length <= 0) {
    return "Parameter must be at least 1 digit or more. No negative numbers"
  } else {
    return passArr.join("");
  }

}

const password = generatePassword(10);
console.log(`Generated password: ${password}`)