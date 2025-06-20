let Height = document.querySelector('.js-height');
let Weight = document.querySelector('.js-weight');
let toggelbutton = document.querySelector('.js-toggle')
let calculation = document.querySelector('.js-result')
// let units = ["metric","imperial","cm_kg"];
let units = [
  {
    name: 'metric',
    heightPlaceholder: `Enter height in meters`,
    weightPlaceholder: `Enter weight in Kg`,
    convert:(H,W)=>(
      {heightInMeters:parseFloat(H), 
       weightInKilo: parseFloat(W)
      }
    )
  
  },
  {
    name: 'imperial',
    heightPlaceholder: `Enter height in inches`,
    weightPlaceholder: `Enter weight in lbs`,
    convert:(H,W)=>(
      {heightInMeters:parseFloat(H)* 0.0254, 
       weightInKilo: parseFloat(W)* 0.4536
      }
    )
  },
  {
    name: 'cm-kg',
    heightPlaceholder: `Enter height in cm`,
    weightPlaceholder: `Enter weight in Kg`,
    convert:(H,W)=>(
      {heightInMeters:parseFloat(H)/100, 
       weightInKilo: parseFloat(W)
      }
    )
  }
] 
let unitsIndex = 0

function toggel(){
  unitsIndex = unitsIndex + 1;
  if(unitsIndex>2){
    unitsIndex = 0
  } 
toggelbutton.textContent = units[unitsIndex].name
updateUi()
}
function updateUi(){
  Height.placeholder = units[unitsIndex].heightPlaceholder
  Weight.placeholder = units[unitsIndex].weightPlaceholder
}
// function updateUi(){
//   if(
//     unitsIndex === 0){
//     Height.placeholder = "Enter height in meters";
//     Weight.placeholder = "Enter weight in Kg"
//   }else if(
//     unitsIndex === 1
//   ){
//    Height.placeholder = "Enter height in inches";
//    Weight.placeholder = "Enter weight in lbs"
//   }else if(
//     unitsIndex === 2
//   ){
//     Height.placeholder = "Enter height in cm";
//     Weight.placeholder = "Enter weight in Kg"
//   }
// }
function calculate(){
  let heightInMeters,weightInKilo;
  let H = Height.value;
  let W = Weight.value;  
  let result;

  let converted = units[unitsIndex].convert(H,W)
  heightInMeters = converted.heightInMeters;
  weightInKilo = converted.weightInKilo;

  // if(
  //   unitsIndex === 0
  // ){
  //  heightInMeters = Height.value;
  //  weightInKilo  = Weight.value;
  // }
  // if(
  //   unitsIndex === 1
  // ){
  //  heightInMeters = Height.value*0.0254
  //  weightInKilo  = Weight.value*0.4536
  // }
  // if(
  //   unitsIndex ===2
  // ){
  // heightInMeters = Height.value/100
  //  weightInKilo  = Weight.value
  // }
  result = weightInKilo/(heightInMeters*heightInMeters)
  calculation.innerHTML = result.toFixed(2);
} 
updateUi()