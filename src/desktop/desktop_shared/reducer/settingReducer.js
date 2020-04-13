import { ActionTypes } from "../actions";

const defaultState = {
  isSidebarCollapsed: false,
};

const settingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.EXPAND_SIDE_BAR:
      return {
        ...state,
        isSidebarCollapsed: false,
      };

    case ActionTypes.COLLAPSE_SIDE_BAR:
      return {
        ...state,
        isSidebarCollapsed: true,
      };

    default:
      return state;
  }
};

export default settingReducer;
