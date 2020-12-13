import { combineReducers } from "redux";
import choosenWebsiteReducer from "./choosenWebsiteReducer";

const rootReducer = combineReducers({
  choosenWebsite: choosenWebsiteReducer,
});

export default rootReducer;
