import { GET_ALL_EMOJIS, GET_SEARCHED_EMOJIS } from "../constants";
import { setupInitialEmojis, getEmojisForCategory } from "../actions";

const INITIAL_STATE = {
  allEmojis: setupInitialEmojis(),
  1: getEmojisForCategory(1),
  2: getEmojisForCategory(2),
  3: getEmojisForCategory(3),
  4: getEmojisForCategory(4),
  5: getEmojisForCategory(5),
  6: getEmojisForCategory(6),
  7: getEmojisForCategory(7),
  8: getEmojisForCategory(8)
};

console.log(JSON.stringify(INITIAL_STATE, null, 2));

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
