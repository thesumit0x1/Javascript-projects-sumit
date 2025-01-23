const inputTag =document.querySelector('.input-tag')
const acBtn =document.querySelector('.ac')
const delBtn =document.querySelector('.del')
const forwardSlashBtn =document.querySelector('.forword-slash')
const asteriskBtn =document.querySelector('.asterics')
const sevenBtn =document.querySelector('.seven')
const eightBtn =document.querySelector('.eight')
const nineBtn =document.querySelector('.nine')
const minusBtn =document.querySelector('.minus')
const sixBtn =document.querySelector('.six')
const fiveBtn =document.querySelector('.five')
const fourBtn =document.querySelector('.four')
const plusBtn =document.querySelector('.plus')
const threeBtn =document.querySelector('.three')
const twoBtn =document.querySelector('.two')
const oneBtn =document.querySelector('.one')
const pointBtn =document.querySelector('.point')
const oneZeroBtn =document.querySelector('.one-zero')
const twoZeroBtn =document.querySelector('.two-zero')
const equalBtn =document.querySelector('.equal')


acBtn.addEventListener('click',(e)=> inputTag.value ='')

delBtn.addEventListener('click',(e)=> {
let splittedArr= inputTag.value.split('')
splittedArr.pop()
inputTag.value =splittedArr.join('')
})


// #functions to calculate

function calculationFun() {
try {
    if(inputTag.value !== ''){
        inputTag.value=eval(inputTag.value) //? important about eval
    } else{
        alert('Enter input field first: ')
    }
} catch (error) {
    console.log(error);
}
}



// #Especial charecterts buttons
forwardSlashBtn.addEventListener('click',(e)=> inputTag.value= inputTag.value +'/')
asteriskBtn.addEventListener('click',(e)=> inputTag.value= inputTag.value +'*')
minusBtn.addEventListener('click',(e)=> inputTag.value= inputTag.value +'-')
plusBtn.addEventListener('click',(e)=> inputTag.value= inputTag.value +'+')
pointBtn.addEventListener('click',(e)=> inputTag.value= inputTag.value+'.')
equalBtn.addEventListener('click',(e)=>calculationFun())




// #numbers buttons

oneBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+1)
twoBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+2)
threeBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+3)
fourBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+4)
fiveBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+5)
sixBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+6)
sevenBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+7)
eightBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+8)
nineBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+9)
oneZeroBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+0)
twoZeroBtn.addEventListener('click',(e)=>inputTag.value=inputTag.value+'00')

