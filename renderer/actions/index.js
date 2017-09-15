import _ from "lodash";
import { GET_ALL_EMOJIS, GET_EMOJIS, MAKE_UNIQ_UNICODES } from "../constants";
// import unicodes from "./unicodes";
import unicodes from "./unicodesFormatted.json";

// let uniqUnicodes = [];

export const setupInitialEmojis = () => {
  return unicodes;
};

// const getAllUniqueEmojis = () => {
//   return uniqUnicodes;
// };

export const getAllEmojis = () => {
  return {
    type: GET_ALL_EMOJIS,
    payload: unicodes
  };
};

export const getEmojis = searchTerm => {
  const emojisForTerm = _.filter(unicodes, o => {
    return o.name.toLowerCase().includes(searchTerm);
  });

  return {
    type: GET_EMOJIS,
    payload: emojisForTerm
  };
};
