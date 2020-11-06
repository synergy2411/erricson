// ES6 Module import
// import { createStore } from 'redux';

// Common Module Import
const { createStore } = require("redux");

const initialState = {
  counter: 0,
};
// Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "ADD_COUNTER":
      return { counter: state.counter + action.value };
    case "SUBTRACT_COUNTER":
      return { counter: state.counter - action.value };
    default:
      return state;
  }
  //   if (action.type === "INCREMENT") {
  //     return {
  //       counter: state.counter + 1,
  //     };
  //   } else if (action.type === "DECREMENT") {
  //     return {
  //       counter: state.counter - 1,
  //     };
  //   } else if (action.type === "ADD_COUNTER") {
  //     return {
  //       counter: state.counter + action.value,
  //     };
  //   }
  //   return state;
}

// Store
const store = createStore(rootReducer);

console.log(store.getState());

// Subscribe the store

store.subscribe(() => {
  console.log("[STATE]", store.getState());
});

// Dispatch Actions
store.dispatch({ type: "INCREMENT" });

// console.log("AFTER DISPATCH 1: ", store.getState());

store.dispatch({ type: "DECREMENT" });

// console.log("AFTER DISPATCH 2 : ", store.getState());

store.dispatch({ type: "ADD_COUNTER", value: 10 });

// console.log("AFTER DISPATCH 3 : ", store.getState());

store.dispatch({ type: "SUBTRACT_COUNTER", value: 5 });

// console.log("AFTER DISPATCH 4 : ", store.getState());
