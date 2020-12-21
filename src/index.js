import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span")

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action) => {
//   // if (action.type === "ADD") {
//   //   return count + 1;
//   // } else if (action.type === "MINUS") {
//   //   return count - 1;
//   // } else {
//   //   return count;
//   // }
//   switch (action.type) {
//     case ADD:
//       return count + 1
//     case MINUS:
//       return count - 1
//     default:
//       return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onchange = ()  => {
//   number.innerText = countStore.getState();
// };

// countStore.subscribe(onchange);

// const handleAdd = () => {
//   countStore.dispatch({type: ADD});
// };
// const handleMinus = () => {
//   countStore.dispatch({type: MINUS});
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addTodo = text => {
//   return { 
//     type: ADD_TODO, 
//     text 
//   };
// }

// const deleteToDo = id => {
//   return { 
//     type: DELETE_TODO, 
//     id 
//   };
// }

// const reducer = (state = [], action) => {
//   switch(action.type) {
//     case ADD_TODO:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE_TODO:
//       return state.filter(toDo => toDo.id !== action.id);
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// store.subscribe(() => {console.log(store.getState())});

// const dispatchAddTodo = text => {
//   store.dispatch(addTodo(text));
// }

// const dispatchDeleteToDo = e => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteToDo(id));
// }

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach(toDo => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   })
// }

// store.subscribe(paintToDos);

// // const createToDo = toDo => {
// //   const li = document.createElement("li");
// //   li.innerText = toDo;
// //   ul.appendChild(li);
// // };

// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = '';
//   dispatchAddTodo(toDo);
// };

// form.addEventListener("submit", onSubmit);