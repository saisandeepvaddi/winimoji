const fs = require("fs");
const readline = require("readline");
const path = require("path");
const _ = require("lodash");

const inputFilePath = path.resolve(__dirname, "..", "data", "emoji-test.txt");
const outputFilePath = path.resolve(__dirname, "..", "data", "emojis.json");
const pureEmojiOutput = path.resolve(
  __dirname,
  "..",
  "data",
  "pure-emojis.json"
);

const groupEmojiOutput = path.resolve(
  __dirname,
  "..",
  "data",
  "group-emojis.json"
);

let data = [];

// Create output file if doesn't exist

fs.closeSync(fs.openSync(outputFilePath, "w"));
fs.closeSync(fs.openSync(pureEmojiOutput, "w"));
fs.closeSync(fs.openSync(groupEmojiOutput, "w"));
const inputStream = fs.createReadStream(inputFilePath, {
  encoding: "utf-8"
});
const outputStream = fs.createWriteStream(outputFilePath, {
  encoding: "utf-8"
});

const pureEMojiOutputStream = fs.createWriteStream(pureEmojiOutput, {
  encoding: "utf-8"
});

const groupEmojiOutputStream = fs.createWriteStream(groupEmojiOutput, {
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
let groupEmojis = {};
let currentGroupEmojis = [];

let p = 0;
let prevGroupName = "";

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
    groupEmojis = {
      ...groupEmojis,
      [currentGroup]: {
        ...groupEmojis[currentGroup],
        [emojiObj.unicode]: emojiObj
      }
    };
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

const createGroupedEmojis = () => {
  currentGroupEmojis = [];
  _.forEach(categories, category => {
    const emojisWithCategory = data[category];
    const emojisRequired = _.map(emojisWithCategory, emojis => {
      return _.map(emojis, e => e);
    });
    currentGroupEmojis = {
      ...currentGroupEmojis,
      [category]: _.flattenDeep(emojisRequired)
    };
  });
};

rl.on("close", () => {
  outputStream.write(JSON.stringify(data, null, 2));
  pureEMojiOutputStream.write(JSON.stringify(pureEmojis, null, 2));
  createGroupedEmojis();
  groupEmojiOutputStream.write(JSON.stringify(currentGroupEmojis, null, 2));
  console.log("Finished");
});