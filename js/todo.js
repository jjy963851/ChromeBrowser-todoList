const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = []; //always start with empty array
const TODO_KEY = "todos";
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDos));// change text to String Json.stringify
}
function paintToDo(newTodo){
    
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo )
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
  
    toDoList.appendChild(li);

}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text:newTodo, 
        id: Date.now(),
    };
    toDos.push(newToDoObject); //put in the array
    paintToDo(newToDoObject); //on the screen 
    saveToDos();
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

function sayHello(item){
   // console.log("this is the turn off",item);
}
if(savedTodos !== null){
    const parsedTodo = JSON.parse(savedTodos);
    toDos = parsedTodo;
  parsedTodo.forEach(paintToDo); // we can excute function that what we want

}
