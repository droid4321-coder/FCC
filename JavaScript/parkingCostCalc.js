alert("Parking Cost Calculator");

let hours = prompt("Enter the number of hours you parked:");

alert("You parked for: " + hours + " hours");

let pricePerHour = prompt("Enter the price per hour for parking:");

alert("The price per hour for parking is: " + pricePerHour);

let additionalCharge = prompt("Enter any additional charge (if applicable, e.g. if there is additional price in first hour or fixed fee):");

let price = 0

let pricefixed = price.toFixed(2);

try {
    if (hours < 0 || pricePerHour < 0 || additionalCharge < 0) {
        throw new Error("Input values cannot be negative.");
    }
    else if (additionalCharge = 0 || additionalCharge == "") {
        alert("Total cost of parking is: " + (hours * pricePerHour).toFixed(2));
    }
    else {
        alert("Total cost of parking is: " + ((hours * pricePerHour) + additionalCharge.toFixed(2)));
    }
} catch (error) {
    alert(error.message);
}

alert("Thanks for using the parking cost calculator!");
