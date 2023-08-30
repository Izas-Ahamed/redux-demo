# Redux with React 
<img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="REDUX-TOOLKIT" height="30">

Redux is a predictable state managment tool for JavaScript apps , here I have demonstrated redux with react.

#### Packages used:
 - [Redux](https://redux.js.org/introduction/getting-started#redux-core) - A predictable state container for JavaScript apps.
 - [Immer](https://immerjs.github.io/immer/installation) - Allows you to work with immutable state in a more convenient way.
 - [Thunk](https://github.com/reduxjs/redux-thunk#installation-and-setup) - Middleware extends the store's abilities, and lets you write async logic that interacts with the store).
 - [React Redux](https://www.npmjs.com/package/react-redux) - Official React bindings for Redux.
 - [Axios](https://axios-http.com/docs/intro#installing) - Axios is a promise-based HTTP Client.
 - [Redux Logger](https://www.npmjs.com/package/redux-logger#install) - A middleware for logging each state changes.
   
## What's in here?
##### Here I demostrated:

- In redux folder we exporting root reducer which holds all the reducers and common store which imports root reducer and middlewares and import it into top root component which App.js here, then passing as prop and wrapping parent element with Provider component given by [React Redux](https://www.npmjs.com/package/react-redux).
- In redux folder we separating reducers and its respective action creators and action types.
- Middlewares used here are [Thunk](https://github.com/reduxjs/redux-thunk#installation-and-setup) for async actions and [Redux Logger](https://www.npmjs.com/package/redux-logger#install) for logging state changes.
- Here I have used three reducers for the demo which are:
  - `counter` with increamenting and decreamenting exapmle actions that gets input from user or with default payload and makes increament or decreament the count.
  - `words` with addWord action example that takes input from user or with default payload and removeWord action that removes the word by filtering array.
  - `users` with fetchUsers action which is an Async action handled by [Thunk](https://github.com/reduxjs/redux-thunk#installation-and-setup) middleware and fetching data from api then mutates the state.
- [Immer](https://immerjs.github.io/immer/installation) is used in reducers as an example to demonstrate how easy to mutate complex state values.
- In hooks components example we getting state from `useSelector` hook and dispatching action by `useDispatch` hook given by [React Redux](https://www.npmjs.com/package/react-redux) package.

## Demo
To run this, simply go to terminal and to this project directory then do the following commands:
```sh
npm install
```
then type
```sh
npm start
```
---
That's it 😀!
