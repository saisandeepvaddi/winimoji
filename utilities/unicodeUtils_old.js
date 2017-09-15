const fs = require("fs");

const fromUnicodeToEmoji = unicode => {
  let hex;
  if (unicode.startsWith("U+")) {
    hex = "0x".concat(unicode.slice(2));
  }
  return String.fromCodePoint(hex);
};

module.exports = { fromUnicodeToEmoji };
