function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = (parseFloat(temperature) * 9/5) + 32;
        document.getElementById('result').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperature) - 32) * 5/9;
        document.getElementById('result').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°C`;
    }
}
