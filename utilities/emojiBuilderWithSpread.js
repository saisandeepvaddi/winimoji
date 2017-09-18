const fs = require("fs");
const readline = require("readline");
const path = require("path");
// const _ = require("lodash");

const inputFilePath = path.resolve(__dirname, "..", "data", "emoji-test.txt");
const outputFilePath = path.resolve(__dirname, "..", "data", "emojis.json");
const pureEmojiOutput = path.resolve(
  __dirname,
  "..",
  "data",
  "pure-emojis.json"
);

let data = [];

// Create output file if doesn't exist

fs.closeSync(fs.openSync(outputFilePath, "w"));
fs.closeSync(fs.openSync(pureEmojiOutput, "w"));
const inputStream = fs.createReadStream(inputFilePath, {
  encoding: "utf-8"
});
const outputStream = fs.createWriteStream(outputFilePath, {
  encoding: "utf-8"
});

const pureEMojiOutputStream = fs.createWriteStream(pureEmojiOutput, {
  encoding: "utf-8"
});

outputStream.on("error", error => {
  console.error("It's error", error);
});

const rl = readline.createInterface({
  input: inputStream,
  terminal: false
});

let currentGroup, currentSubgroup, currentEmoji;

const print = data => {
  console.log(JSON.stringify(data, null, 2));
};

function createEmoji(emojiArray) {
  const unicode = emojiArray[1].trim();
  const emoji = emojiArray[2];
  const name = emojiArray[3].trim();
  return {
    unicode,
    emoji,
    name
  };
}

const checkGroupRegExp = new RegExp("#\\s*group:\\s*(.*)", "i");
const checkSubgroupRegExp = new RegExp("#\\s*subgroup:\\s*(.*)", "i");
const checkEmojiRegExp = new RegExp("(.*);.*#\\s*([^\\s]+)\\s*(.*)", "i");

let group, subgroup, emoji;
let id = 1;

let k = 1;
let pureEmojis = [];

rl.on("line", line => {
  if ((group = line.match(checkGroupRegExp)) !== null) {
    const groupName = group[1];
    currentGroup = groupName;
    console.log(` ${k++} : ${currentGroup}`);
    if (!data.hasOwnProperty(currentGroup)) {
      data = {
        ...data,
        [currentGroup]: {}
      };
    }
    // print(data);
  } else if ((subgroup = line.match(checkSubgroupRegExp)) !== null) {
    const subgroupName = subgroup[1];
    currentSubgroup = subgroupName;
    // print(data);
    if (!data[currentGroup].hasOwnProperty(currentSubgroup)) {
      data = {
        ...data,
        [currentGroup]: {
          ...data[currentGroup],
          [currentSubgroup]: {}
        }
      };
    }
  } else if ((emoji = line.match(checkEmojiRegExp)) !== null) {
    const emojiObj = createEmoji(emoji);
    pureEmojis = [...pureEmojis, emojiObj];
    if (currentGroup && currentSubgroup) {
      data = {
        ...data,
        [currentGroup]: {
          ...data[currentGroup],
          [currentSubgroup]: {
            ...data[currentGroup][currentSubgroup],
            [emojiObj.unicode]: emojiObj
          }
        }
      };
    }
  }
});

rl.on("close", () => {
  outputStream.write(JSON.stringify(data, null, 2));
  pureEMojiOutputStream.write(JSON.stringify(pureEmojis, null, 2));
  console.log("Finished");
});
