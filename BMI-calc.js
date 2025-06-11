let Height = document.querySelector('.js-height');
let Weight = document.querySelector('.js-weight');
let toggelbutton = document.querySelector('.js-toggle')
let units = true

function toggelButton(){
  units = !units
  if(!units){
  toggelbutton.textContent = 'lb/inches'
 
  } 

  if(units){
     toggelbutton.textContent = 'Kg/meters'
  
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