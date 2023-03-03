const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.querySelector("#todoform") as HTMLFormElement;
const list = document.getElementById("todolist");
interface Todo {
  text: string;
  completed: boolean;
}

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
};

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
}

form.addEventListener("submit", handleSubmit);

function createTodo(todo: Todo) {
  const newTodoText = todo.text;
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(newTodoText);
  newLI.append(checkbox);
  list?.append(newLI);
}
