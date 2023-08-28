const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");

//creating listener passing callback function whenever state changes
const unsubscribe = store.subscribe(() =>
  console.log("Updated State : ", store.getState())
);

store.dispatch(counterActions.increament());
store.dispatch(counterActions.increament(3));
store.dispatch(counterActions.decreament());

//unsubscribing listener
unsubscribe();
