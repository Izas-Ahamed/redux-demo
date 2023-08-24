import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import Words from "./components/Words";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Words />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
