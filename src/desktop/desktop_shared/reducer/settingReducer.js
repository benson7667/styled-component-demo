import { ActionTypes } from "../actions";

const defaultState = {
  isSidebarCollapsed: false,
};

const settingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDE_BAR:
      return {
        ...state,
        isSidebarCollapsed: !state.isSidebarCollapsed,
      };

    default:
      return state;
  }
};

export default settingReducer;
