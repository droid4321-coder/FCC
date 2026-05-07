let literPrice = prompt("Enter the price of fuel per liter:");

alert("The price of fuel per liter is: " + literPrice);
    
let fuelCapacity = prompt("Enter the fuel capacity of your vehicle in gallons:");

alert("The fuel capacity of your vehicle is: " + fuelCapacity);

let fullTankCost = (literPrice * fuelCapacity) * 4;

alert("The cost to fill your tank is: " + fullTankCost.toFixed(2));

alert("The cost to fill half of your tank is: " + (fullTankCost / 2).toFixed(2));

alert("The cost to fill a quarter of your tank is: " + (fullTankCost / 4).toFixed(2));

alert("Thanks for using the fuel cost calculator!");