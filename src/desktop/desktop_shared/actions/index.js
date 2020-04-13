import EasyActions from "redux-easy-actions";

const { Actions, Constants } = EasyActions({
  EXPAND_SIDE_BAR(type) {
    return { type };
  },

  COLLAPSE_SIDE_BAR(type) {
    return { type };
  },
});

export { Actions, Constants as ActionTypes };
