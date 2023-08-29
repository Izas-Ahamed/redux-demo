# Redux-ToolKit with React 
<img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="REDUX-TOOLKIT" height="30">

Redux-toolkit is a batteries included state management library unlike redux comes only with state management tools, here I have demonstrated redux toolkit with react.

#### Packages used:
 - [Redux ToolKit](https://redux-toolkit.js.org/introduction/getting-started#an-existing-app) - comes with [Immer](https://immerjs.github.io/immer/installation)(allows you to work with immutable state in a more convenient way) and [Thunk](https://github.com/reduxjs/redux-thunk#installation-and-setup)(Middleware extends the store's abilities, and lets you write async logic that interacts with the store).
 - [React Redux](https://www.npmjs.com/package/react-redux) - Official React bindings for Redux.
 - [Axios](https://axios-http.com/docs/intro#installing) - Axios is a promise-based HTTP Client.
 - [Redux Logger](https://www.npmjs.com/package/redux-logger#install) - A middleware for logging each state changes.
   
## What's in here?
##### Here I demostrated:

- In app folder we exporting common store which holds all the reducers and middlewares and import it into top root component which App.js here, then passing as prop and wrapping parent element with Provider component.
- In features folder we separating slices (reducers and actions)
- Here I have used three slices for demo which are:
  - `words` with addWord action example that takes input from user or with default payload and removeWord action that removes the word by filtering array.
  - `counter` with increamenting action example that holds input from user or with default payload , it also have <b>extraReducers</b> which acts for adding word and increases count by 1 and decreamenting action without payload example.
  - `users` with fetchUsers action which is an Async action created by createAsyncThunk which uses thunk internally by redux toolkit and fetching data from api.
- In components we getting state from `useSelector` hook and dispatching action by `useDispatch` hook given by [React Redux](https://www.npmjs.com/package/react-redux) package.

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
