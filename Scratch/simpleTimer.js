function countdown (seconds) {
    if (!Number.isInteger(seconds)) {
        console.log("It needs to be a number!");
        return;
    }

    console.log(`Seconds to countdown: ${seconds}`)

    const countdownId = setInterval(() => {
        //console.log(`${seconds} ${"|".repeat(seconds)}`);
        console.log(`The countdown ends in ${seconds} seconds`);
        seconds--;
        if (seconds < 0) {
            clearInterval(countdownId);
            console.log("Done!");
        }
    }, 1000)
}

countdown(30)