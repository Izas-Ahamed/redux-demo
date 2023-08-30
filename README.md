# Redux-ToolKit with Plain JavaScript 
<img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="REDUX-TOOLKIT" height="30">

Redux-toolkit is a batteries included state management library unlike redux comes only with state management tools, here I have demonstrated redux toolkit with JavaScript.

#### Packages used:
 - [Redux ToolKit](https://redux-toolkit.js.org/introduction/getting-started#an-existing-app) - comes with [Immer](https://immerjs.github.io/immer/installation)(allows you to work with immutable state in a more convenient way) and [Thunk](https://github.com/reduxjs/redux-thunk#installation-and-setup)(Middleware extends the store's abilities, and lets you write async logic that interacts with the store).
 - [Axios](https://axios-http.com/docs/intro#installing) - Axios is a promise-based HTTP Client.
 - [Redux Logger](https://www.npmjs.com/package/redux-logger#install) - A middleware for logging each state changes.
   
## What's in here?
##### Here I demostrated:

- In app folder we exporting common store which holds all the reducers and middlewares and import it into index.js and we have included listener in index.js and [Redux Logger](https://www.npmjs.com/package/redux-logger#install) middleware for logging state changes, then we using the store straight away for dispatching actions.
- In features folder we separating slices (reducers and actions)
- Here I have used three slices for demo which are:
  - `words` with addWord action example that takes input from user or with default payload.
  - `counter` with increamenting action example that holds input from user or with default payload , it also have <b>extraReducers</b> which acts for adding word action and increases count by 1 and decreamenting action without payload example.
  - `users` with fetchUsers action which is an Async action created by createAsyncThunk which uses thunk internally by redux toolkit and fetching data from api.

## Demo
To run this, simply go to terminal and to this project directory then do the following commands:
```sh
npm install
```
then type
```sh
node index.js
```
---
That's it 😀!
