let Height = document.querySelector('.js-height');
let Weight = document.querySelector('.js-weight');
let toggelbutton = document.querySelector('.js-toggle')
const saveUnits = localStorage.getItem('bmiUnit')
let units = true
if(saveUnits === null){
  units = true
}else if(saveUnits === 'true'){
  units = true
}else if(saveUnits === 'false'){
units = false
}
updatePlaceholder();  
toggelbutton.textContent = units ? 'Kg/meters' : 'lb/inches'; 

function toggelButton(){
  units = !units
  localStorage.setItem('bmiUnit',units)
  
  if(!units){
  toggelbutton.textContent = 'lb/inches'
 
  } 

  if(units){
     toggelbutton.textContent = 'Kg/meters'
  
  }
  updatePlaceholder()
}
function updatePlaceholder(){
if(units){
  Height.placeholder = "Enter height in meters"
  Weight.placeholder = "Enter weight in Kg"
} 
if(!units){
  Height.placeholder = "Enter height in inches"
  Weight.placeholder = "Enter weight in lbs"
}
}

function calculate(){
  let heightValue = parseFloat(Height.value) 
  let weightValue = parseFloat(Weight.value)
  let heightInMeters;
  let weightInkilo;
  if(!units){
    heightInMeters = heightValue * 0.0254;
    weightInkilo = weightValue * 0.453592;
  }
  if(units){
    heightInMeters = heightValue;
    weightInkilo = weightValue;
  }

 let result = weightInkilo/(heightInMeters * heightInMeters)
  document.querySelector('.js-result').innerHTML = result.toFixed(2)
} 