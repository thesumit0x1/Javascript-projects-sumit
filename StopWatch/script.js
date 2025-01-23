const timerTAg = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let hr = 0;
let min = 0;
let sec = 0;
let crrIndex=0
let isStart = true;

function startTheTimer() {
  if (isStart == true) {
   sec= parseInt(sec);
    min=parseInt(min);
    hr=parseInt(hr);

    if (min == 0) {
      min = "00";
    }
    if (hr == 0) {
      hr = "00";
    }

    sec++;

    if (sec < 10) {
      sec = "0" + sec;
    }
    timerTAg.innerText = `${hr} : ${min} : ${sec}`;

    if (sec == 60) {
      startMin();
      sec = 0;
    }

    setTimeout(() => startTheTimer(), 1000);
  }
}



function startMin() {
  parseInt(min);
  min++;
  if (min < 10) {
    min = "0" + min;
  }
  timerTAg.innerText = `${hr} : ${min} : ${sec}`;

  if (min == 60) {
    startHour();
    min = 0;
  }
}

function startHour() {
  hr++;
  if (hr < 10) {
    hr = "0" + hr;
  }
  timerTAg.innerText = `${hr} : ${min} : ${sec}`;
}


function resetFun() {
timerTAg.innerText = `00 : 00 : 00`
  hr = 0;
  min = 0;
  sec = 0;
}

startBtn.addEventListener("click", (e) => {
 if(crrIndex == 0){
    isStart = true;
    startTheTimer();
 }
 crrIndex++
});

pauseBtn.addEventListener("click", (e) => {
    crrIndex =0
  isStart = false;
  startTheTimer();
});

resetBtn.addEventListener("click", (e) =>{
    crrIndex =0
    isStart=false
    resetFun()

});
