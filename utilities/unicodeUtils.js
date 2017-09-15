const fs = require("fs");
const unicodes = require("../renderer/actions/unicodes");
const path = require("path");
const _ = require("lodash");

const fromUnicodeToEmoji = unicode => {
  let hex;
  if (unicode.startsWith("U+")) {
    hex = "0x".concat(unicode.slice(2));
  }
  return String.fromCodePoint(hex);
};

let formattedUnicodes = [];
let uniqUnicodes = [];

const fromUnicodes = () => {
  console.log("No of unicodes before conversion: ", unicodes.length);

  unicodes.forEach(unicode => {
    const code = unicode.code;
    const name = unicode.name;
    const formattedCode = fromUnicodeToEmoji(code);
    formattedUnicodes.push({
      code: formattedCode,
      name
    });
  });

  console.log("No of unicodes after conversion: ", formattedUnicodes.length);
};

const eliminateDuplicates = () => {
  uniqUnicodes = _.uniqBy(formattedUnicodes, "code");
  console.log("No of unique unicodes: ", uniqUnicodes.length);
};

(function createUnicodes() {
  const outputFilePath = "../renderer/actions/unicodesFormatted.js";
  const p = path.resolve(
    __dirname,
    "..",
    "renderer",
    "actions",
    "unicodesFormatted.json"
  );
  fs.closeSync(fs.openSync(p, "w"));
  const stream = fs.createWriteStream(p);
  console.log("Creating unicodes");

  fromUnicodes();
  eliminateDuplicates();

  stream.setDefaultEncoding("utf-8");
  stream.on("error", err => {
    console.error("Error while writing unicodes");
    console.error(err);
  });
  stream.write(JSON.stringify(uniqUnicodes, null, 2));
  stream.end();
})();

module.exports = { fromUnicodeToEmoji };
