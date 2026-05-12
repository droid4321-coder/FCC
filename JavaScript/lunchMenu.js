//in progress

let lunches = [];

function addLunchToEnd(arr, str) {
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr;
}

addLunchToEnd(lunches, "pizza")
addLunchToEnd(lunches, "sandwich")
console.log(lunches)

function addLunchToStart(arr, str) {
    arr.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return arr;
}

addLunchToStart(lunches, "burger")
addLunchToStart(lunches, "pasta")
console.log(lunches)

function removeLastLunch(arr) {
    let str = arr.pop();
    console.log(`${str} removed from the end of the lunch menu.`);
    return arr;
}

//removeLastLunch(lunches)
//console.log(lunches)

function removeFirstLunch(arr) {
    let str = arr.shift();
    console.log(`${str} removed from the end of the lunch menu.`);
    return arr;
}

//removeFirstLunch(lunches)
console.log(lunches)

let empty = [];
let test =  empty[Math.floor(Math.random() * empty.length)]
console.log(test)

function getRandomLunch(arr) {

}

getRandomLunch(lunches)