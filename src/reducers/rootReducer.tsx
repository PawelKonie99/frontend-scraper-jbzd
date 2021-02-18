import { combineReducers } from "redux";
import { choosenWebsiteReducer } from "./choosenWebsiteReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  choosenWebsiteReducer: choosenWebsiteReducer,
  userReducer: userReducer,
});

export default rootReducer;
