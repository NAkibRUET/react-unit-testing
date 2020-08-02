import { combineReducers } from "redux";
import success from "./successReducer";
import postReducer from "./postReducer";

export default combineReducers({
  postReducer,
});
