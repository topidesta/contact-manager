import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// objek contact
export default combineReducers({
  myContact: contactReducer
});
