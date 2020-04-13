import { combineReducers } from "redux";

import homeReducer from "../desktop/pages/home/homeReducer";
import settingReducer from "../desktop/desktop_shared/reducer/settingReducer";

const reducers = combineReducers({
  home: homeReducer,
  appSetting: settingReducer,
});

export default reducers;
