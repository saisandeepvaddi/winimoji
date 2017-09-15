import { GET_ALL_EMOJIS, GET_SEARCHED_EMOJIS } from "../constants";
import { setupInitialEmojis } from "../actions";

const INITIAL_STATE = {
  emojis: setupInitialEmojis()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_EMOJIS:
      return { ...state, emojis: action.payload };

    case GET_SEARCHED_EMOJIS:
      return { ...state, emojis: action.payload };

    default:
      return state;
  }
};
