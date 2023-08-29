import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import { Counter } from "./components/Counter";
import { Words } from "./components/Words";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Words />
      </Provider>
    </div>
  );
}

export default App;
