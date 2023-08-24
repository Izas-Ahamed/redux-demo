import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import Words from "./components/Words";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Words />
      </div>
    </Provider>
  );
}

export default App;
