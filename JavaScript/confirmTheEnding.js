function confirmEnding (str1, str2) {

  if (str2 === str1.substring(str1.length - str2.length)) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("test", "est"))