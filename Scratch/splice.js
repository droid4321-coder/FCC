/* let arr = [1,2,3];

let swaparr = arr.slice()
swaparr[1] = swaparr.splice(0, 1, swaparr[1])[0];

console.log(swaparr) */

squad = [{id: 1, name:"John", role:"Astronaut"},
    {id: 2, name:"Mike", role:"Astronaut2"},
    {id: 3, name:"James", role:"Astronaut3"},
]

console.log(squad)

function swapCrew (crew, fromIndex, toIndex) {
    const updatedCrew = crew.slice();
    updatedCrew[1] = updatedCrew.splice(updatedCrew[fromIndex], updatedCrew[toIndex], updatedCrew[1])[0];

    return updatedCrew;
}
console.log(squad[1]);
console.log(squad[2]);
console.log(swapCrew(squad, 2, 1));
console.log(squad[1]);
console.log(squad[2]);