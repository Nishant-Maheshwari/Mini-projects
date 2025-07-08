 let quotes = [
      {
        text: 'Lose yourself in the music',
        author: 'Marshal Mathers',
        stageName: 'Eminem' 
      },
      {
        text: 'Music is my escape, and it’s how I get through everything.',
        author: 'Hayley Williams',
        stageName: 'Hayley Nichole Williams' 
      },
      {
        text: 'I’m strong on the outside, not all the way through. I’ve never been perfect, but neither have you.',
        author: 'chester charles Beninngton',
        stageName: 'Chazzy chaz' 
      },
      {
        text: 'The music has to be right, or nothing else makes sense.',
        author: 'chester charles Beninngton',
        stageName: 'chazzy chaz' 
      },
    ]
   function generate(){
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let text = quotes[randomIndex].text;
    let author = quotes[randomIndex].author
    let stageName = quotes[randomIndex].stageName
    let generated = document.querySelector('.js-result')
    generated.innerHTML = `<h2>${text}</h2>
    <div>author: ${author}   stage name: ${stageName}</div>`
   } 


   document.querySelector('.js-generate').addEventListener('click', generate)
