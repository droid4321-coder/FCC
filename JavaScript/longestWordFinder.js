function findLongestWordLength(str) {
  let step1 = str.trim().split(" ");
  const lengths = step1.map(str => str.length);
  //console.log(lengths);
  lengths.sort((a, b) => b - a);
  //console.log(lengths)
  return lengths[0];
}

console.log(findLongestWordLength("This is a test sentence"))