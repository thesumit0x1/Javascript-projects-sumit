const questionsList = [
  {
    question: "who is the foreign minister of india?",
    options: [
      { option: "Dr. S. Jayshankar", answer: "true" },
      { option: "S. Bhosle", answer: "false" },
      { option: "R.viru", answer: "false" },
    ],
  },

  {
    question: "World's largest animal?",
    options: [
      { option: "dinosaur", answer: "false" },
      { option: "Elephant", answer: "false" },
      { option: "The blue whale", answer: "true" },
    ],
  },

  {
    question: "What is the most beautiful place india?",
    options: [
      { option: "Kerla", answer: "false" },
      { option: "Uttrakhand", answer: "true" },
      { option: "Arunachal Pradesh", answer: "false" },
    ],
  },

  {
    question: "Who is well known as Mr.Perfectionist?",
    options: [
      { option: "Amir", answer: "true" },
      { option: "Hiritic", answer: "false" },
      { option: "Allu Arjun", answer: "false" },
    ],
  },

  {
    question: "which animal considered as ship of desert?",
    options: [
      { option: "mouse", answer: "false" },
      { option: "Cactus", answer: "false" },
      { option: "Camel", answer: "true" },
    ],
  },
];

const startQuizBtn = document.querySelector(".start-quizbtn");
const questionContainer = document.querySelector(".que-container");
const questionTag = document.querySelector(".question");
const optionBtns = document.querySelectorAll(".opt-btn");
const frontPage = document.querySelector(".front-page");
const nextQueBtn = document.querySelector(".nextbtn");
const resultInNum =document.querySelector('.resultinNum')
const playAgainBtn =document.querySelector('.playagain')
const resultHeading =document.querySelector('.resultHeading')


let queIdx = 0;
let score = 0;
let optionBtnArr = [...optionBtns];

startTheQuiz()

function startTheQuiz(){
  startQuizBtn.addEventListener("click", () => {
    queIdx =0
    nextQueBtn.classList.remove('hide')
    optionBtnArr.forEach((e)=>{
      e.classList.remove('hide')
    })
    frontPage.classList.add("hide");
    questionContainer.classList.remove("hide");
    showQues()
  });
}



function showQues() {
  if( queIdx  <= questionsList.length -1){
    questionTag.classList.remove('hide')
    questionTag.innerText =questionsList[queIdx].question
    optionBtnArr.forEach((e,i)=>{
    e.innerText =questionsList[queIdx].options[i].option
    })
  }
  queIdx++
}

function disabledOpts(){
  optionBtnArr.forEach((e) =>{
    e.disabled=true
    e.classList.add('noHover')
  })
}

function findCorrectOpt(){
optionBtnArr.forEach((ele) =>{
  const queReturn1 = questionsList.filter((e,i) => e.question ==questionTag.innerText )
  const correctOpt1 =queReturn1[0].options.filter((e) =>e.option ==  ele.innerText);
  if(correctOpt1[0].answer == 'true'){
    ele.classList.add('correct')
    disabledOpts()
  }
})
}


optionBtnArr.forEach((ele)=>{
  ele.addEventListener('click',(e) =>{
  const queReturn = questionsList.filter((e,i) => e.question ==questionTag.innerText )
  const correctOpt =queReturn[0].options.filter((e) =>e.option ==  ele.innerText);
if(correctOpt[0].answer == 'true'){
  ele.classList.add('correct')
  score++
  disabledOpts()
} else{
  ele.classList.add('incorrect')
  findCorrectOpt()
}
  })
})


function removeOptClass() {
  optionBtnArr.forEach((ele)=>{
  ele.classList.remove('correct')
  ele.classList.remove('incorrect')
  ele.classList.remove('noHover')
  ele.disabled =false
  })
}

nextQueBtn.addEventListener('click', ()=>{
  showQues()
  removeOptClass()

  if(queIdx === questionsList.length+1){
    questionTag.classList.add('hide')
    nextQueBtn.classList.add('hide')
    resultInNum.innerText=score
    resultHeading.classList.remove('hide')
    playAgainBtn.classList.remove('hide')
    optionBtnArr.forEach((e) =>{
      e.classList.add('hide')
    })
  }
})

playAgainBtn.addEventListener('click',(e) =>{
  resultHeading.classList.add('hide')
  playAgainBtn.classList.add('hide')
  frontPage.classList.remove("hide");
  questionContainer.classList.add('hide')
  score =0
  startTheQuiz()
})

