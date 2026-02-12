
const temp = document.querySelector('#temp');
const windSpeed = document.querySelector('#wind');
const chill = document.querySelector('#chill');

const temperature = Number(temp.textContent);
const wind = Number(windSpeed.textContent);

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * v ** 0.16 + 0.3965 * t * v ** 0.16;
}

if (temperature <= 10 && wind > 4.8) {
  chill.textContent =
    calculateWindChill(temperature, wind).toFixed(1) + " °C";
} else {
  chill.textContent = "N/A";
}