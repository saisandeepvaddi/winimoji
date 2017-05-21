const fs = require("fs");

const fromUnicodeToEmoji = unicode => {
  let hex;
  if (unicode.startsWith("U+")) {
    hex = "0x".concat(unicode.slice(2));
  }
  return String.fromCodePoint(hex);
};

const unicodesFromFile = filePath => {
  let unicodes = fs.readFileSync(filePath, "utf8");
  return JSON.parse(unicodes);
};

module.exports = { fromUnicodeToEmoji, unicodesFromFile };
