import _ from "lodash";
import { GET_ALL_EMOJIS, GET_SEARCHED_EMOJIS } from "../constants";
import unicodes from "./unicodesFormatted.json";
import emojis from "./emojis.json";
import pureEmojis from "./pure-emojis.json";

const categories = {
  1: "Smileys & People",
  2: "Animals & Nature",
  3: "Food & Drink",
  4: "Travel & Places",
  5: "Activities",
  6: "Objects",
  7: "Symbols",
  8: "Flags"
};

export const setupInitialEmojis = () => {
  return pureEmojis;
};

export const getAllEmojis = () => {
  return {
    type: GET_ALL_EMOJIS,
    payload: pureEmojis
  };
};

export const getEmojisForCategory = category => {
  const realCategory = categories[category];
  const emojisWithCategory = emojis[realCategory];
  const emojisRequired = _.map(emojisWithCategory, emojis => {
    return _.map(emojis, e => e);
  });
  return _.flattenDeep(emojisRequired);
};

export const getEmojis = searchTerm => {
  const emojisForTerm = _.filter(unicodes, o => {
    return o.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return {
    type: GET_SEARCHED_EMOJIS,
    payload: emojisForTerm
  };
};
