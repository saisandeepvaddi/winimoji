import _ from "lodash";
import { GET_ALL_EMOJIS, GET_EMOJIS, MAKE_UNIQ_UNICODES } from "../constants";
import unicodes from "./unicodes";

let uniqUnicodes = [];

export const makeAllUniqueUnicodes = () => {
  uniqUnicodes = _.uniqBy(unicodes, "code");
  return uniqUnicodes;
};

const getAllUniqueEmojis = () => {
  return uniqUnicodes;
};

export const getAllEmojis = () => {
  return {
    type: GET_ALL_EMOJIS,
    payload: uniqUnicodes
  };
};

export const getEmojis = searchTerm => {
  const emojisForTerm = uniqUnicodes.filter(unicode => {
    return unicode.name.toLowerCase().includes(searchTerm);
  });
  return {
    type: GET_EMOJIS,
    payload: emojisForTerm
  };
};
