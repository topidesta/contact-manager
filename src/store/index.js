import { createStore } from "redux";
import rootReducer from "../reducers";

const initState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(rootReducer, initState, composeEnhancers);

export default store;
