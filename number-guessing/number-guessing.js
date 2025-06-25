//selectors//
let userGuest = document.querySelector('.js-guess')
let chancesLeft = document.querySelector('.js-chances')
let result = document.querySelector('.js-result') 
/////

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let chancesInNumber = 10
function compare(){
  if(Number(userGuest.value) === randomNumber){
 result.innerHTML = `You win, the number is ${randomNumber}`
  }else{
    result.innerHTML = `U guessed wrong! try again`
    chancesInNumber--;
    chancesLeft.innerHTML = `chances left = ${chancesInNumber}`;
    if(chancesInNumber < 1){
      chancesInNumber = 10;
      result.innerHTML = `You used all ur chances. the number is ${randomNumber}`
      randomNumber1()
    }
  }
  
} 
function randomNumber1(){
  randomNumber =Math.floor(Math.random() * 100) + 1
  console.log(randomNumber);
  
}



