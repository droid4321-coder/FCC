let count = 0;

function cardCounter(card) {
  
  const arr1 = [2, 3, 4, 5, 6]
  const arr2 = [7, 8, 9]
  const arr3 = [10, "J", "Q", "K", "A"]

  if (arr1.includes(card)) {
    count++;
    //console.log("Count increased! Current Count = " + count)
  }

  if (arr2.includes(card)) {
    //console.log("Count not affected! Current Count = " + count)
  }

  if (arr3.includes(card)) {
    count--;
    //console.log("Count Decreased! Current Count = " + count)
  }

  if (count > 0) {
    return count + " Bet"
  } else {
    return count + " Hold"
  }

}

console.log(cardCounter(2))