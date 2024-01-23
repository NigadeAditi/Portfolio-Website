function convertTemperature() {
    const degreeInput = document.getElementById('degree');
    const clickSelect = document.getElementById('click');
    const resultInput = document.getElementById('result');

    const degree = parseFloat(degreeInput.value);

    if (isNaN(degree)) {
        alert("Please enter a valid number for degree.");
        return;
    }

    const unit = clickSelect.value;

    if (unit === 'Celsius') {
        const result = (degree * 9/5) + 32;
        resultInput.value = result.toFixed(2);
    } else if (unit === 'fahrenheit') {
        const result = (degree - 32) * 5/9;
        resultInput.value = result.toFixed(2);
    }
}