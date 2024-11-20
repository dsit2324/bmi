const weight = document.getElementById('weight');
const height = document.getElementById('height');
const output = document.getElementById('vystup');
const btnCalc = document.querySelector('[type=button]');

let BMI = {
    // atributy objektu 
    gender: null,
    age: 18,
    weight: 70,
    height: 170,
    // metody objektu 
    cmToMetres: function() {
        return this.height / 100;
    },
    calcBMI: function() {
        return (this.weight / (this.cmToMetres() ** 2)).toFixed(2);
    },
    state: function() {
        let bmi = this.calcBMI;
        if (bmi < 18.5) return 'podváha';
        if (bmi >= 18.5 && bmi < 25) return 'normální váha';
        if (bmi >= 25 && bmi < 30) return 'nadváha';
        return 'obezita';
    }
}

btnCalc.addEventListener('click', function() {
    // weight.value++;
    BMI.weight = parseInt(weight.value); //parseInt je pretypovani 
    BMI.height = parseInt(height.value);
    console.log(BMI.calcBMI());
    output.innerHTML = `Tvoje BMI je ${BMI.calcBMI()}, což je  ${BMI.state()}`

});

