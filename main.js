function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm in to m

    if (!weight || !height) {
        document.getElementById('result').textContent = 'pleas input some amount';
        return;
    }

    const bmi = weight / (height * height);
    let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = 'Underweight ';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'obesity';
    }

    document.getElementById('result').textContent = `Your bmi is ${bmi.toFixed(2)} (${bmiCategory})`;
}
