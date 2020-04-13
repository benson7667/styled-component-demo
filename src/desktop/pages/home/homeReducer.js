import { ActionTypes } from "./homeAction";

const defaultState = {
  feeds: [],
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_HOME_FEED_REQUEST:
      return {
        ...state,
      };

    case ActionTypes.GET_HOME_FEED_RESPONSE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default homeReducer;
