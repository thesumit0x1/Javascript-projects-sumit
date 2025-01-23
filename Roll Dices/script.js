const allDices =["imgaes/dice (1).png",
    "imgaes/dice (2).png",
    "imgaes/dice (3).png",
    "imgaes/dice (4).png",
    "imgaes/dice (5).png",
    "imgaes/dice (6).png"
]

  const rollDice =document.querySelector('.roll-btn')
  const diceIMG1 =document.querySelector('.img1')
  const diceIMG2 =document.querySelector('.img2')
  const resultTag =document.querySelector('.result')
  
  let dices =document.querySelectorAll('.dice')
  const arrDices =[...dices]

//  rollDicesFun()


function rollDicesFun(){
   arrDices.forEach((die)=>{
   die.classList.add('shakeDice')
   })

   setTimeout(()=>{
    arrDices.forEach((die)=>{
      die.classList.remove('shakeDice')
      }) 
   }, 1000)
 

    let randomNum1 = Math.floor(Math.random()*6 )
    diceIMG1.src =allDices[randomNum1]


    let randomNum2 = Math.floor(Math.random()*6 )
    diceIMG2.src =allDices[randomNum2]

    resultTag.innerText=`your result:${randomNum1 +1 + randomNum2 +1}`
}

rollDice.addEventListener('click',()=> rollDicesFun())