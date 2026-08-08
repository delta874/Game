const throttle = document.getElementById("throttle");
const throttleValue = document.getElementById("throttleValue");

const rpmDisplay = document.getElementById("rpm");
const pressureDisplay = document.getElementById("pressure");
const temperatureDisplay = document.getElementById("temperature");
const thrustDisplay = document.getElementById("thrust");

function updateEngine() {
    const throttlePercent = Number(throttle.value);

    // Basic engine model
    const maxRPM = 40000;
    const rpm = (throttlePercent / 100) * maxRPM;

    const pressure = 1 + (throttlePercent / 100) * 11;
    const temperature = 288 + (throttlePercent / 100) * 900;
    const thrust = (throttlePercent / 100) * 5000;

    // Update the screen
    throttleValue.textContent = throttlePercent + "%";
    rpmDisplay.textContent = Math.round(rpm);
    pressureDisplay.textContent = pressure.toFixed(1) + " bar";
    temperatureDisplay.textContent = Math.round(temperature) + " K";
    thrustDisplay.textContent = Math.round(thrust) + " N";
}

throttle.addEventListener("input", updateEngine);

updateEngine();
