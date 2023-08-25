import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import Words from "./components/Words";
import Users from "./components/Users";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <HooksCounter />
        <Words />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
