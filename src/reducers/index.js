import { combineReducers } from "redux";

import homeReducer from "../desktop/pages/home/homeReducer";

const reducers = combineReducers({
  home: homeReducer,
  auth: {},
});

export default reducers;
