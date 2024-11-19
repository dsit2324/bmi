const weight = document.getElementById("weight");
const height = document.getElementById("height");
const output = document.getElementById("vystup");
const btnCalc = document.querySelector("[type=button]");

btnCalc.addEventListener('click',  function() {
    weight.value++;
    console.log(weight.value);
});
