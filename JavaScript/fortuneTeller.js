let fortune1 = "String 1";
let fortune2 = "String 2";
let fortune3 = "String 3";
let fortune4 = "String 4";
let fortune5 = "String 5";

let min = 1;
let max = 6;
//let random = Math.random();
let randomNumber = Math.floor(Math.random() * (max - min) + min)
//console.log(random)
console.log(randomNumber)

let selectedFortune = "";

if (randomNumber === 1 ) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);