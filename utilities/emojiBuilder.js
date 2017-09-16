const fs = require("fs");
const readline = require("readline");
const path = require("path");

const inputFilePath = path.resolve(__dirname, "..", "data", "emoji-test.txt");
const outputFilePath = path.resolve(__dirname, "..", "data", "emojis.json");

let data = [];

// Create output file if doesn't exist

fs.closeSync(fs.openSync(outputFilePath, "w"));
const inputStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });
const outputStream = fs.createWriteStream(outputFilePath, {
  encoding: "utf-8"
});

outputStream.on("error", error => {
  console.error("It's error", error);
});

const rl = readline.createInterface({
  input: inputStream,
  terminal: false
});

i = 100;
let currentGroup, currentSubgroup, currentEmoji;

function createEmoji(emojiArray) {
  const unicode = emojiArray[1];
  const emoji = emojiArray[2];
  const name = emojiArray[3];
  return {
    unicode,
    emoji,
    name
  };
}

const checkGroupRegExp = new RegExp("#\\s*group:\\s*(.*)", "i");
const checkSubgroupRegExp = new RegExp("#\\s*subgroup:\\s*(.*)", "i");
const checkEmojiRegExp = new RegExp("(\\w+)\\s*;.*#\\s*([^\\s]+)\\s*(.*)", "i");

rl.on("line", line => {
  if ((group = line.match(checkGroupRegExp)) !== null) {
    const groupName = group[1];
    currentGroup = groupName;
    console.log(groupName);

    data = Object.assign({}, data, {
      [groupName]: []
    });
  } else if ((subgroup = line.match(checkSubgroupRegExp)) !== null) {
  } else if ((emoji = line.match(checkEmojiRegExp)) !== null) {
  }
});

rl.on("close", () => {
  outputStream.write(JSON.stringify(data, null, 2));
  console.log("Finished");
});
