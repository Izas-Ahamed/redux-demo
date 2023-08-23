//here we using redux for state management example
const { counterReducer } = require("./reducers/counterReducer");
const { wordsReducer } = require("./reducers/wordsReducer");
const {
  increamentValue,
  decreamentValue,
} = require("./actions/counterActionCreators");
const { addWord } = require("./actions/wordsActionCreators");
const {
  fetchSuccess,
  fetchError,
  fetchUsers,
} = require("./actions/asyncActionCreators");

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

//logger
const reduxLogger = require("redux-logger");
const { asyncReducer } = require("./reducers/asyncReducer");
const logger = reduxLogger.createLogger();

//async
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

//combining reducers
const rootReducer = combineReducers({
  count: counterReducer,
  words: wordsReducer,
  users: asyncReducer,
});

// adding logger middleware
const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunkMiddleware)
);
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

//async function handled by thunk which expect a callback function
function fetchUsersFromAPI() {
  return function (dispatch) {
    dispatch(fetchUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        const users = data.map(({ name }) => name);
        dispatch(fetchSuccess(users));
      })
      .catch((error) => dispatch(fetchError(error)));
  };
}

//dispatching async function
store.dispatch(fetchUsersFromAPI());
