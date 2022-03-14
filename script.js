function runTime() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (hours >= 12) {
        document.getElementById("session").textContent = "PM"
    } else {
        document.getElementById("session").textContent = "AM"
    }

}

setInterval(runTime, 10);
