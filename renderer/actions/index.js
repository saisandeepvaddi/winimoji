const _ = require("lodash");
import { groupEmojis, allEmojis } from "../emojis";
import {
  GET_EMOJIS_FOR_SEARCH,
  GET_CATEGORY_EMOJIS,
  GET_ALL_EMOJIS,
  GET_INITIAL_STATE
} from "../constants";

export const getAllEmojis = () => {
  return allEmojis;
};

const categories = {
  "1": "Smileys & People",
  "2": "Animals & Nature",
  "3": "Food & Drink",
  "4": "Travel & Places",
  "5": "Activities",
  "6": "Objects",
  "7": "Symbols",
  "8": "Flags"
};

export const getEmojisForCategory = category => {
  const realCategory = categories[category];
  const emojisWithCategory = groupEmojis[realCategory];

  return {
    type: GET_CATEGORY_EMOJIS,
    payload: emojisWithCategory
  };
};

export const getEmojisForCategoryNumber = category => {
  return getEmojisForCategory(category).payload;
};

export const getInitialState = () => {
  return {
    type: GET_INITIAL_STATE
  };
};
export const getEmojisForSearchTerm = term => {
  const emojisForSearch = _.filter(allEmojis, o => {
    return o.name.toLowerCase().includes(term.toLowerCase());
  });

  return {
    type: GET_EMOJIS_FOR_SEARCH,
    payload: emojisForSearch
  };
};
