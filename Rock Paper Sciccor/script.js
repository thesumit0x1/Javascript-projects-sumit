const allImages = [
  "images/Punch.png",
  "images/Palm.png",
  "images/Scissors.png",
];

const allWeapons = document.querySelectorAll(".image");
const imagesContainer = document.querySelector(".img-container");
const ComputerMan = document.querySelector(".comp-content");
const computerImg = document.querySelector(".comp-img");
const resultPTag = document.querySelector(".result-p");
const resultContainer = document.querySelector(".result");
const yourScoreTAg = document.querySelector(".score1");
const computerScoreTAg = document.querySelector(".score2");
const youContentTag = document.querySelector(".you-content");
const WeaponsContainer = document.querySelector(".weapons");
const resetBtn = document.querySelector(".reset-btn");
const score1 =document.querySelector('.score1')
const score2 =document.querySelector('.score2')

let yourScore = 0;
let computerScore = 0;

clickImages();


function clickImages() {
  [...allWeapons].forEach((imgTag, i) => {
    imgTag.src = allImages[i];
    imgTag.addEventListener("click", () => {
      imagesContainer.classList.remove("center");
      ComputerMan.classList.remove("hide");
      resultContainer.classList.remove("hide");
      youContentTag.classList.remove("weaponsCenter");
      WeaponsContainer.classList.remove("weaponsCenter");
      showRandomImg(i);
    });
  });
}

function showRandomImg(linkIndx) {
  let randomNum = Math.floor(Math.random() * 3);
  computerImg.src = allImages[randomNum];
  mathResult(linkIndx, randomNum);
}

function mathResult(userLik, randomNum1) {
  if (userLik === randomNum1) {
    resultPTag.innerText = `It's a DRAW!`;
  } else if (
    (userLik === 0 && randomNum1 === 2) ||
    (userLik === 1 && randomNum1 === 0) ||
    (userLik === 2 && randomNum1 === 1)
  ) {
    resultPTag.innerText = `You Win!`;
    resultPTag.innerText = `You Win!`;
    resultPTag.innerText = `You Win!`;
    yourScoreTAg.innerText = `${++yourScore}`;
  } else if (
    (userLik === 1 && randomNum1 === 2) ||
    (userLik === 0 && randomNum1 === 1) ||
    (userLik === 2 && randomNum1 === 0)
  ) {
    resultPTag.innerText = `Computer Wins!`;
    resultPTag.innerText = `Computer Wins!`;
    resultPTag.innerText = `Computer Wins!`;
    computerScoreTAg.innerText = `${++computerScore}`;
  }
}

function resetAll() {
    imagesContainer.classList.add("center");
    ComputerMan.classList.add("hide");
    resultContainer.classList.add("hide");
    youContentTag.classList.add("weaponsCenter");
    WeaponsContainer.classList.add("weaponsCenter");
    resultPTag.innerText = `Choose Your Weapon!`;
    score1.innerText=0
    score2.innerText=0
    yourScore=0
    computerScore = 0;
  }

resetBtn.addEventListener("click",()=> resetAll());