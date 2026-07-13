//object practice

const cargo = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}

//console.log(cargo) // all object
//console.log(cargo.unit) // certain value of certain key

function iterateObject(obj) {
  for(const [key, value] of Object.entries(obj)) {
    console.log(`${key} is a the left object, ${value} is a ${typeof(value)} and is the right object of the key.`)
  }
}

console.log(iterateObject(cargo))// iteration

function checkProperty(obj, prop, type) {
  if(!obj.hasOwnProperty(prop)) {
    return "This property is missing from the object.";
  } else if(obj.prop !== type) {
    return "Object is not of the entered type."
  } else {
    return `${obj[prop]} exists and is correct.`;
  }
}

console.log(checkProperty(cargo, "prop", "number"))