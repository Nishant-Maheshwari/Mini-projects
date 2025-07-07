function randomColor(){
  let hex = '0123456789ABCDEF'
  // let randomnumber = Math.floor(Math.random() * 16)
  let color = '#'
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
} 
console.log(randomColor());
let intervalID;

function startChanging(){
  if(!intervalID){
  intervalID = setInterval(backgroundColor ,500);}
}
function backgroundColor(){
  document.body.style.backgroundColor = randomColor()
} 
document.querySelector('.start').addEventListener('click',startChanging) 

function stopChanging(){
  clearInterval(intervalID)
} 

document.querySelector('.stop').addEventListener('click',stopChanging)