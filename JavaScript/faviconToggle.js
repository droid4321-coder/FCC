//something I learned today and want to put here:
//If I want to select all elements with ID or tag or class,
//I should use querySelectorAll! and make a forEach to get all items

const buttonSelector = document.querySelectorAll(".favorite-icon")
console.log(buttonSelector)

buttonSelector.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("filled")
    if(item.classList.contains("filled")) {
      item.innerHTML = "&#10084;";
    } else {
      item.innerHTML = "&#9825;"
    }
  })
})