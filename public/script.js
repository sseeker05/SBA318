const todoContainer = document.querySelector(".todo-container"); // Corrected class name
const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");

let todoArray = [];
const URL = "http://localhost:3000/todos";


async function get_Todos() {
  try {
    const resp = await fetch(URL);  
    const data = await resp.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];  
  }
}


get_Todos()
  .then(todoArr => {
    todoArray = todoArr; 
    console.log(todoArray); 
  })
  .catch(err => console.error(err)); 