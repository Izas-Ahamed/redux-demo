import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import { Counter } from "./components/Counter";
import { Words } from "./components/Words";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Words />
        <Users />
      </Provider>
    </div>
  );
}

export default App;
