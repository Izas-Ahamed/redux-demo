import { createStore } from "redux";
import { counterReducer } from "./counter/reducers/counterReducer";
import rootReducer from "./rootReducer";

export default createStore(rootReducer);
