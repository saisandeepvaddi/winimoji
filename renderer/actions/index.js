import _ from "lodash";
import { GET_ALL_EMOJIS, GET_SEARCHED_EMOJIS } from "../constants";
import unicodes from "./unicodesFormatted.json";

export const setupInitialEmojis = () => {
  return unicodes;
};

export const getAllEmojis = () => {
  return {
    type: GET_ALL_EMOJIS,
    payload: unicodes
  };
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
