//US - User Stories, T = Tests

//US1 - Create empty array
let lunches = []
let emptyArray = []

//US2 - addLunchToEnd function - pushes entered string to certain array
function addLunchToEnd (arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

//T 4,5
addLunchToEnd(lunches, "Tacos");
console.log(lunches);
//console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

//US3 - addLunchToStart function - unshifts string to certain array
function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return arr;
}

//T 8, 9
addLunchToStart(lunches, "Sushi")
console.log(lunches)
//console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"))

//US4 - removeLastLunch
function removeLastLunch(arr) {
  if (arr.length <= 0) {
    console.log("No lunches to remove.");
  } else {
    let str = "";
    str = arr.pop();
    console.log(`${str} removed from the end of the lunch menu.`);
    return arr;
  }
}

// T 13, 14
//console.log(removeLastLunch(["Stew", "Soup", "Toast"]))
//console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]))
//console.log(removeLastLunch(emptyArray))
//console.log(removeLastLunch(lunches))

//US5 - removeFirstLunch
function removeFirstLunch(arr) {
  if (arr.length <= 0) {
    console.log("No lunches to remove.");
  } else {
    let str = "";
    str = arr.shift();
    console.log(`${str} removed from the start of the lunch menu.`);
    return arr;
  }
}

// T 18,19
//console.log(removeFirstLunch(emptyArray))
//console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]))
////console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]))

//US6 - getRandomLunch
function getRandomLunch (arr) {
  if (arr.length <= 0) {
    console.log("No lunches available.");
    return "";
  } else {
    const randomNumber = Math.floor(Math.random() * arr.length);
    //console.log(randomNumber);
    console.log(`Randomly selected lunch: ${arr[randomNumber]}`);
    return "";
  }
}

//T 23,24
console.log(getRandomLunch(emptyArray))
console.log(getRandomLunch(lunches))

//US7 - showLunchMenu
function showLunchMenu (arr) {
  if (arr.length <= 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}

// T 28-30
showLunchMenu(emptyArray)
showLunchMenu((["Greens", "Corns", "Beans"]))
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])