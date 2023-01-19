const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");


let todoList = JSON.parse( localStorage.getItem("todoList"))||[];


window.addEventListener("load",()=> {
    getTodoListFromLocalStorage();
});


const getTodoListFromLocalStorage = () => {

}


addBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    if(todoInput.value.trim() === ""){
        alert("please, enter new todo text");
        return;
    }

   const newTodo = {
    id:new Date().getTime(),
    completed:false,
    text: todoInput.value
   }
})