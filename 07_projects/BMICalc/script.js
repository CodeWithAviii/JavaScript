const form = document.querySelector('form');

const BmiCalc = (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height, ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight, ${weight}`;
    }else{
        const bmi = weight / (height * height) * 10000;
        result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`
        if(bmi < 18.6) {
            document.querySelector('#weight-guide').innerHTML = `<p>Under Weight = Less than 18.6</p>`
        }else if(bmi < 24.9) {
            document.querySelector('#weight-guide').innerHTML = `<p>Normal Range = 18.6 and 24.9</p>`
        }else {
            document.querySelector('#weight-guide').innerHTML = `<p>Overweight = Greater than 24.9</p>`
        }
    }
}

form.addEventListener('submit', BmiCalc);