let Height = document.querySelector('.js-height');
let Weight = document.querySelector('.js-weight');
let weightUnit = true
function toggleWeight(){

}

function calculate(){
  let heightValue = Height.value/100 
  let weightValue = Weight.value
 let result = weightValue/(heightValue*heightValue)
  document.querySelector('.js-result').innerHTML = result.toFixed(2)
}