let arr = [];
let empty = ""

function repeatStringNumTimes(str , num) {
  
  if (num >= 1) {
    for (let i = 0; i < num; i++) {
      arr.push(str);
    }
    return arr.join("");
  } else {
    return empty;
  }
  
}

console.log(repeatStringNumTimes("test", 133769420))