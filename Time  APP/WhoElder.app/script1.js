const person1INput = document.querySelector(".person1");
const person2INput = document.querySelector(".person2");
const resultTag = document.querySelector(".result");
const buttonTag = document.querySelector("button");
const form = document.querySelector("form");
const dateTag =document.querySelector('.date')
const monthTag =document.querySelector('.month')
const yearTag =document.querySelector('.Year')
const timeTag =document.querySelector('.time')

form.addEventListener("submit", (e) => {
  e.preventDefault();
if(person1INput.value !== '' &&  person2INput.value !== ''){
    const user1AgeInMs =Date.now() - parseDateString(person1INput).getTime()
    const user2AgeInMs = Date.now() - parseDateString(person2INput).getTime()
    let date1 = 0
   let date2 =0

    if (user1AgeInMs > user2AgeInMs) {
      resultTag.disabled = false;
      resultTag.value = `User1 is elder `;
      
      date1 = parseDateString(person1INput)
      date2 = parseDateString(person2INput)

let user1fullYear =date1.getFullYear() - date2.getFullYear()
let user1Month =date1.getMonth() -date2.getMonth()
let user1date =date1.getDate() - date2.getDate()
let user1hours=date1.getHours() -date2.getHours()
let user1minutes =date1.getMinutes() - date2.getMinutes()


dateTag.innerText =`${Math.abs(user1date)}`
monthTag.innerText =`${Math.abs(user1Month)}`
yearTag.innerText =`${Math.abs(user1fullYear)}`
timeTag.innerText =`${Math.abs(user1hours)}:${Math.abs(user1minutes)}`

    } else if(user1AgeInMs < user2AgeInMs) {
      resultTag.disabled = false;
      resultTag.value = `User2 is elder `;

      date1 = parseDateString(person1INput)
      date2 = parseDateString(person2INput)

let user2fullYear =date2.getFullYear() - date1.getFullYear()
let user2Month =date2.getMonth() -date1.getMonth()
let user2date =date2.getDate() - date1.getDate()
let user2hours=date2.getHours() -date1.getHours()
let user2minutes =date2.getMinutes() - date1.getMinutes()

dateTag.innerText =`${Math.abs(user2date)}`
monthTag.innerText =`${Math.abs(user2Month)}`
yearTag.innerText =`${Math.abs(user2fullYear)}`
timeTag.innerText =`${Math.abs(user2hours)}:${Math.abs(user2minutes)}`
    } else{
      resultTag.disabled = false;
      resultTag.value = `Both are of same age`;
    }

} else{
    alert('Enter DOB first:')
}
});



function parseDateString(dobString) {
  const [dateString1, timeString1] = dobString.value.split(" ");

  const [userDay, userMonth, userYear] = dateString1
    .split("/")
    .map((ele) => Number(ele));
  const [userHour, userMM] = timeString1.split(":").map((ele) => Number(ele));

  let date = new Date(userYear, userMonth - 1, userDay, userHour, userMM);
  return date;
}





