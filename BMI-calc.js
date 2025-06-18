let Height = document.querySelector('.js-height');
let Weight = document.querySelector('.js-weight');
let toggelbutton = document.querySelector('.js-toggle')
let calculation = document.querySelector('.js-result')
let units = ["metric","imperial","cm_kg"]; 
let unitsIndex = 0

function toggel(){
  unitsIndex = unitsIndex + 1;
  if(unitsIndex>2){
    unitsIndex = 0
  } 
toggelbutton.textContent = units[unitsIndex]
updateUi()
}
function updateUi(){
  if(
    unitsIndex === 0){
    Height.placeholder = "Enter height in meters";
    Weight.placeholder = "Enter weight in Kg"
  }else if(
    unitsIndex === 1
  ){
   Height.placeholder = "Enter height in inches";
   Weight.placeholder = "Enter weight in lbs"
  }else if(
    unitsIndex === 2
  ){
    Height.placeholder = "Enter height in cm";
    Weight.placeholder = "Enter weight in Kg"
  }
}
function calculate(){
  let heightInMeters,weightInKilo;
  let result;
  if(
    unitsIndex === 0
  ){
   heightInMeters = Height.value;
   weightInKilo  = Weight.value;
  }
  if(
    unitsIndex === 1
  ){
   heightInMeters = Height.value*0.0254
   weightInKilo  = Weight.value*0.4536
  }
  if(
    unitsIndex ===2
  ){
  heightInMeters = Height.value/100
   weightInKilo  = Weight.value
  }
  result = weightInKilo/(heightInMeters*heightInMeters)
  calculation.innerHTML = result.toFixed(2);
} 
updateUi()