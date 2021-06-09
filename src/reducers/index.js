import counter from "./counter";
import auth from "./authentication";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
    counter,
    auth
});

export default mainReducer;