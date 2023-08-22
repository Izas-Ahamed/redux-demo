//here we using redux for state management example
const { valueReducer } = require("./reducers/counterReducer");
const {
  increamentValue,
  decreamentValue,
} = require("./actions/counterActionCreators");
const redux = require("redux");
const createStore = redux.createStore;

const store = createStore(valueReducer);
console.log("Initial State :", store.getState());

//callback fires whenever state got updated and returns unsubscribe function if you don't want to emit callback after
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(increamentValue());
store.dispatch(increamentValue(3));
store.dispatch(decreamentValue());

//unsubscribing event
unsubscribe();
