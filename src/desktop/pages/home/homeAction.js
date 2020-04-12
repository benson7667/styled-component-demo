import EasyActions from "redux-easy-actions";

const { Actions, Constants } = EasyActions({
  GET_HOME_FEED_REQUEST(type, payload) {
    return { type, payload };
  },

  GET_HOME_FEED_RESPONSE(type, data) {
    return { type, data };
  },
});

export { Actions, Constants as ActionTypes };
