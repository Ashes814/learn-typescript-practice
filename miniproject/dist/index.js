"use strict";
// // const btn = document.getElementById("btn") as HTMLButtonElement;
// // const input = document.getElementById("todoinput") as HTMLInputElement;
// // const form = document.querySelector("#todoform") as HTMLFormElement;
// // const list = document.getElementById("todolist");
// // interface Todo {
// //   text: string;
// //   completed: boolean;
// // }
// // const readTodos = (): Todo[] => {
// //   const todosJSON = localStorage.getItem("todos");
// //   if (todosJSON === null) return [];
// //   return JSON.parse(todosJSON);
// // };
// // const todos: Todo[] = readTodos();
// // todos.forEach(createTodo);
// // function handleSubmit(e: SubmitEvent) {
// //   e.preventDefault();
// //   const newTodo: Todo = {
// //     text: input.value,
// //     completed: false,
// //   };
// //   createTodo(newTodo);
// //   todos.push(newTodo);
// //   saveTodos();
// //   input.value = "";
// // }
// // form.addEventListener("submit", handleSubmit);
// // function saveTodos() {
// //   localStorage.setItem("todos", JSON.stringify(todos));
// // }
// // function createTodo(todo: Todo) {
// //   const newTodoText = todo.text;
// //   const newLI = document.createElement("li");
// //   const checkbox = document.createElement("input");
// //   checkbox.type = "checkbox";
// //   checkbox.checked = todo.completed;
// //   checkbox.addEventListener("change", function () {
// //     todo.completed = checkbox.checked;
// //     saveTodos();
// //   });
// //   newLI.append(newTodoText);
// //   newLI.append(checkbox);
// //   list?.append(newLI);
// class Player {
//   // public readonly first: string;
//   // public readonly last: string;
//   protected _score: number = 0;
//   constructor(public first: string, public last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod(): void {
//     console.log("SECRET");
//   }
//   get fullName(): string {
//     return `${this.first} - ${this.last}`;
//   }
//   get score(): number {
//     return this._score;
//   }
//   set score(newScore: number) {
//     if (newScore < 0) throw new Error();
//     this._score = newScore;
//   }
// }
// class SuperPlayer extends Player {
//   public isAdmin: boolean = true;
//   maxScore() {
//     this._score = 9999999;
//   }
// }
// let elton = new Player("Elton", "Steele");
// // elton.secretMethod();
// console.log(elton.fullName);
// elton.score = 8848;
// console.log(elton.score);
// abstract class Employee {
//   constructor(public first: string, public last: string) {}
//   abstract getPay(): number;
//   greet() {
//     console.log("hello");
//   }
// }
// class FullTimeEmployee extends Employee {
//   getPay(): number {
//     return 13;
//   }
// }
// function numberIdentity(item: number): number {
//   return item;
// }
// function stringIdentity(item: string): string {
//   return item;
// }
// function booleanIdentity(item: boolean): boolean {
//   return item;
// }
// // function identity(item: any):any {
// //   return item;
// // }
// function identity<TTTT>(item: TTTT): TTTT {
//   return item;
// }
// const i: string = identity<string>("7");
// const getRandomElement =
// class Playlist<T> {
//   public queue: T[] = [];
//   add(el: T) {
//     this.queue.push(el);
//   }
// }
