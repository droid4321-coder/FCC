const notepad = document.getElementById("notepad");
const counter = document.getElementById("counter");

notepad.addEventListener("keyup", () => {
    counter.textContent = notepad.value.length;
})