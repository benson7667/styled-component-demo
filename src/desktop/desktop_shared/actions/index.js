import EasyActions from "redux-easy-actions";

const { Actions, Constants } = EasyActions({
  TOGGLE_SIDE_BAR(type) {
    return { type };
  },
});

export { Actions, Constants as ActionTypes };
