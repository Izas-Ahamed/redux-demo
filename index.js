//here we using redux for state management example
const { counterReducer } = require("./reducers/counterReducer");
const {
  increamentValue,
  decreamentValue,
} = require("./actions/counterActionCreators");
const { addWord } = require("./actions/wordsActionCreators");
const { wordsReducer } = require("./reducers/wordsReducer");

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
//logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//combining reducers
const rootReducer = combineReducers({
  count: counterReducer,
  words: wordsReducer,
});

// adding logger middleware
const store = createStore(rootReducer, applyMiddleware(logger));
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
store.dispatch(addWord());
store.dispatch(addWord("hello folks!"));
