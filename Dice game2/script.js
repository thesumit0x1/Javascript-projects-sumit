const diceImages = [
  "imgaes/dice (1).png",
  "imgaes/dice (2).png",
  "imgaes/dice (3).png",
  "imgaes/dice (4).png",
  "imgaes/dice (5).png",
  "imgaes/dice (6).png",
];


const bothDices =document.querySelectorAll('.dice')
const playBtn =document.querySelector('.btn')
const h1 =document.querySelector('h1')
const dice1=document.querySelector('.dice-1')
const dice2=document.querySelector('.dice-2')


function playTheGame() {
  let randomNum1 = Math.floor(Math.random() * 6);
   dice1.src=diceImages[randomNum1]
   
  let randomNum2 = Math.floor(Math.random() * 6);
   dice2.src=diceImages[randomNum2]
   matchResult(randomNum1,randomNum2)
}


function matchResult(player1, player2){
 if(player1 > player2){
   h1.innerText='Player1 Wins!'
 } else if(player1 < player2){
    h1.innerText='Player2 Wins!'
 }else{
    h1.innerText='DRAW!'
 }
}


playBtn.addEventListener('click',()=> playTheGame())
