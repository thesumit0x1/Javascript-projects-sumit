const inputTag = document.querySelector("#input-field");
const addButton = document.querySelector(".addbtn");
const tasksListContainer = document.querySelector(".task-lists");



const addTasks = () => {
  // debugger
const taskDiv = document.createElement("div");
taskDiv.classList.add("task");
const spanTag = document.createElement("span");
const btnsContainer = document.createElement("div");
btnsContainer.classList.add("btns");
const editBtn = document.createElement("button");
const deleteBtn = document.createElement("button");
editBtn.classList.add("edit");
deleteBtn.classList.add("delete");
editBtn.innerText='Edit'
deleteBtn.innerText='Delete'
   
 editBtn.addEventListener('click',(e)=>{S
     taskDiv.classList.add('hide')
   if(e){
    inputTag.value=spanTag.innerText
   inputTag.focus()
    taskDiv.remove()
   }
   
   if(!tasksListContainer.children){
    console.log('empty');
  }
 })


  if (inputTag.value) {
    tasksListContainer.classList.remove("hide");
    spanTag.innerText = inputTag.value;
    console.log(spanTag.innerText);
    btnsContainer.append(editBtn, deleteBtn);
    taskDiv.append(spanTag, btnsContainer);
    tasksListContainer.append(taskDiv);
  } else{
    alert('Write something in inputField:')
  }
};






addButton.addEventListener("click", () => addTasks());
