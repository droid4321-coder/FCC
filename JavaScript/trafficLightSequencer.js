const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  // 1. Check if phases array is completely missing or empty
  if (!config.phases || config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  // 2. Check for simulation fault
  if (config.fault === true) {
    console.log("Faulted phase!");
    return;
  }

  // 3. Run the iteration blocks cleanly
  while (cycles > 0) {
    for (let i = 0; i < config.phases.length; i++) {
      if (config.phases[i].duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${config.phases[i].color} for ${config.phases[i].duration} s`);
      }
    }
    cycles--;
  }
}


function generateTimeline(config, cycles) {
  let arr = []
  let currentTime = 0
  while (cycles > 0) {
  for (let i = 0; i < config.phases.length; i++) {
    arr.push(currentTime += config.phases[i].duration);
    }
    cycles--;
  }
  return arr
}

console.log(runSequence(config1, 1))
console.log(generateTimeline())