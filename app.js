document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultSpan = document.getElementById("result");
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;

        if (!isNaN(temperature)) {
            let result;

            if (fromUnit === "celsius" && toUnit === "fahrenheit") {
                result = (temperature * 9 / 5) + 32;
            } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
                result = (temperature - 32) * 5 / 9;
            } else if (fromUnit === "celsius" && toUnit === "kelvin") {
                result = temperature + 273.15;
            } else if (fromUnit === "kelvin" && toUnit === "celsius") {
                result = temperature - 273.15;
            } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
                result = (temperature - 32) * 5 / 9 + 273.15;
            } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
                result = (temperature - 273.15) * 9 / 5 + 32;
            } else {
                result = temperature;
            }

            resultSpan.textContent = `${temperature} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
        } else {
            resultSpan.textContent = "Please enter a valid temperature.";
        }
    });
});
