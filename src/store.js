import { legacy_createStore } from "redux";
import { reducer } from "./Redux/Reducer";

export const store = legacy_createStore(reducer);
