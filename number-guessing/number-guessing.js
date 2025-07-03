//selectors//
let wholeGame = document.querySelector('.js-game')
let userGuess = document.querySelector('.js-guess')
let chancesLeft = document.querySelector('.js-chances')
let result = document.querySelector('.js-result') 
let prevGuess = document.querySelector('.prevGuess')
let submitbtn = document.querySelector('.js-submit')
let resetBtn = document.querySelector('.js-reset')
/////
let chancesInNumber = 10;
let playGame = true
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let playerGuessHistory = [];
if(playGame){
 
submitbtn.addEventListener('click', conclusion)
function conclusion(){
  let guess = Number(userGuess.value);
 validateGuess(guess)
  playerGuessHistory.push(guess)
  console.log(playerGuessHistory);
}}else{

}


function validateGuess(guess){
if(isNaN(guess)){
  printMessage("Enter a number") 
}else if(guess < 1){
  printMessage("Enter a number greatear than zero") 
}else if(guess > 100){
 printMessage("Enter a number lesser than 101") 
}else if(playerGuessHistory.includes(guess)){
printMessage("You have guessed this number before") 
}
else{
compare(guess)
}
}
function compare(guess){
if(chancesInNumber > 0){
if(guess === randomNumber){
  printMessage(`congrats! you won , the number is ${randomNumber} `) 
}else{
printMessage(`Wrong number! try again`) 
prevGuess.innerHTML += `${guess} `
chancesInNumber--
hint(guess)
chancesLeft.innerHTML = `chances left = ${chancesInNumber}`
}
}else if(chancesInNumber === 0){
  printMessage(`all chances are gone. the number is ${randomNumber}`) 
  
}
} 


function hint(guess){
  if(chancesInNumber < 5)
  if(guess > randomNumber){
 printMessage(`hint : the number u guessed is greater `) 
  }else if (
    guess < randomNumber
  ){
     printMessage(`hint : the number u guessed is samller `) 
  }
}

function printMessage(message){
result.innerHTML = message;
userGuess.value = ''
} 
resetBtn.addEventListener('click', reset)

function reset(){
  randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
  wholeGame.innerHTML = `<h1>Guess the Number</h1>
  <input class="js-guess" type="number", placeholder="guess the number">
  <button class="js-submit">submit</button>
  <button class="js-reset">Reset</button>
  <div class="prevGuess"></div>
  <div class="js-chances">chances left = 10</div>
  <div class="js-result"></div>` 
  chancesInNumber = 10;
  userGuess.value = ''
}




// let chancesInNumber = 10
// function compare(){

// if(chancesInNumber > 0){
//   let guess = Number(userGuest.value)
//   if(guess === randomNumber){
//     result.innerHTML = `You win, the number is ${randomNumber}`
//   }else{
//     chancesInNumber--;
//     chancesLeft.innerHTML = `chances left = ${chancesInNumber}`;
//   } if(
//     chancesInNumber === 0
//   ){
//     result.innerHTML = `You used all ur chances. the number is ${randomNumber}`
//   }else{
//    result.innerHTML =   `❗ Wrong guess! Try again.`;
//   }
// }else{
//   result.innerHTML = `⛔ No chances left. Click Reset to play again.`;
// }


  
// //   if(chancesInNumber > 0){
// //   if(Number(userGuest.value) === randomNumber){
// //  result.innerHTML = `You win, the number is ${randomNumber}`
// //   }else{
// //     result.innerHTML = `U guessed wrong! try again`
// //     chancesInNumber--;
// //     chancesLeft.innerHTML = `chances left = ${chancesInNumber}`;}
// //     if(chancesInNumber < 1){
// //       result.innerHTML = `You used all ur chances. the number is ${randomNumber}`
      
// //     }
// //   }
  
// } 
// function reset(){
//   chancesInNumber = 10
//   randomNumber = Math.floor(Math.random() * 100) + 1;
//   console.log(randomNumber);
  
//   result.innerHTML = '';
//   userGuest.value = '';

// }



