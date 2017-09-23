import {
  getAllEmojis,
  getEmojisForCategory,
  getEmojisForCategoryNumber
} from "../actions";
import {
  GET_ALL_EMOJIS,
  GET_CATEGORY_EMOJIS,
  GET_EMOJIS_FOR_SEARCH,
  GET_INITIAL_STATE
} from "../constants";

const INITIAL_STATE = {
  emojis: getEmojisForCategoryNumber(1),
  favorite: {},
  categoryBar: true,
  searchedEmojis: []
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMOJIS_FOR_SEARCH:
      return {
        ...state,
        categoryBar: false,
        emojis: action.payload
      };
    case GET_ALL_EMOJIS:
      return state;
    case GET_INITIAL_STATE:
      return INITIAL_STATE;
    case GET_CATEGORY_EMOJIS:
      return {
        ...state,
        categoryBar: true,
        emojis: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
