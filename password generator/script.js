const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "@",
  "#",
  "&",
  "(",
  ")",
  "[",
  "{",
  "}",
  "]",
  ":",
  "?",
  "/",
  "*",
  "~",
  "$",
  "^",
  "+",
  "=",
  "<",
  ">",
];

const rangeField=document.querySelector('#range-field')
const generateBtn=document.querySelector('.generateBtn')
const showPassword=document.querySelector('.show-password')
const showRange =document.querySelector('.range')
const copyBtn =document.querySelector('.copy-container')


 const generatePassword=(pLength=6)=>{
    let password =''
    showRange.innerText=`${rangeField.value}`
    for (let i =0; i < pLength; i++) {
      let randomNum =(Math.random() *82).toFixed(0)
     if(arr[randomNum] !== undefined){
        password = password + arr[randomNum]
     }
    }  
    showPassword.innerText = password
}

generatePassword()

rangeField.addEventListener('click', (e)=>{
   showRange.innerText=`${rangeField.value}`
} )

copyBtn.addEventListener('click',(e)=>{
    if(showPassword.innerText.length >= 2){
        navigator.clipboard.writeText(showPassword.innerText); 
        alert('Password copied to your keyboard!!!')
    }
})

generateBtn.addEventListener('click',()=> generatePassword(rangeField.value))
