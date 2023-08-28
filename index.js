const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const { wordsActions } = require("./features/words/wordsSlice");

//creating listener passing callback function whenever state changes
const unsubscribe = store.subscribe(() =>
  console.log("Updated State : ", store.getState())
);

store.dispatch(counterActions.increament());
store.dispatch(counterActions.increament(3));
store.dispatch(counterActions.decreament());

store.dispatch(wordsActions.addWord());
store.dispatch(wordsActions.addWord("Hello folks!"));
//unsubscribing listener
unsubscribe();
