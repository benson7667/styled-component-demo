import { combineReducers } from "redux";

import homeReducer from "../desktop/pages/home/homeReducer";

const reducers = combineReducers({
  homeReducer,
});

export default reducers;
