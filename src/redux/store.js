import { createStore } from "redux";
import { counterReducer } from "./counter/reducers/counterReducer";

export default createStore(counterReducer);
