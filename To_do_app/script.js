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
   
 editBtn.addEventListener('click',(e)=>{
     taskDiv.classList.add('hide')
   if(e){
    inputTag.value=spanTag.innerText
   inputTag.focus()
    taskDiv.remove()
   }
   if(tasksListContainer.innerText === ''){
    tasksListContainer.classList.add('hide')
  }
 })

 deleteBtn.addEventListener('click',(e)=>{
  alert('Are you sure? you want to delete your task')
  taskDiv.remove()
  if(tasksListContainer.innerText === ''){
    tasksListContainer.classList.add('hide')
  }
 })

  if (inputTag.value) {
    tasksListContainer.classList.remove("hide");
    spanTag.innerText = inputTag.value;
    btnsContainer.append(editBtn, deleteBtn);
    taskDiv.append(spanTag, btnsContainer);
    tasksListContainer.append(taskDiv);
        inputTag.value =''
  } else{
    alert('Write something in inputField:')
  }

  if(tasksListContainer === ''){

  }
};

addButton.addEventListener("click", () => addTasks());
