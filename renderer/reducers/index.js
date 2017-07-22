import { GET_ALL_EMOJIS, GET_EMOJIS } from "../constants";
import { makeAllUniqueUnicodes } from "../actions";

const INITIAL_STATE = {
  emojis: makeAllUniqueUnicodes()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_EMOJIS:
      return { ...state, emojis: action.payload };

    case GET_EMOJIS:
      return { ...state, emojis: action.payload };

    default:
      return state;
  }
};
