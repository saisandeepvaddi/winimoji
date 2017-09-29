"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = require("fs");
var readline = require("readline");
var path = require("path");
var _ = require("lodash");

var inputFilePath = path.resolve(__dirname, "..", "data", "emoji-test.txt");
var outputFilePath = path.resolve(__dirname, "..", "data", "emojis.json");
var pureEmojiOutput = path.resolve(__dirname, "..", "data", "pure-emojis.json");

var groupEmojiOutput = path.resolve(__dirname, "..", "data", "group-emojis.json");

var data = [];

// Create output file if doesn't exist

fs.closeSync(fs.openSync(outputFilePath, "w"));
fs.closeSync(fs.openSync(pureEmojiOutput, "w"));
fs.closeSync(fs.openSync(groupEmojiOutput, "w"));
var inputStream = fs.createReadStream(inputFilePath, {
  encoding: "utf-8"
});
var outputStream = fs.createWriteStream(outputFilePath, {
  encoding: "utf-8"
});

var pureEMojiOutputStream = fs.createWriteStream(pureEmojiOutput, {
  encoding: "utf-8"
});

var groupEmojiOutputStream = fs.createWriteStream(groupEmojiOutput, {
  encoding: "utf-8"
});

outputStream.on("error", function (error) {
  console.error("It's error", error);
});

var rl = readline.createInterface({
  input: inputStream,
  terminal: false
});

var currentGroup = void 0,
    currentSubgroup = void 0,
    currentEmoji = void 0;

var print = function print(data) {
  console.log(JSON.stringify(data, null, 2));
};

function createEmoji(emojiArray) {
  var unicode = emojiArray[1].trim();
  var emoji = emojiArray[2];
  var name = emojiArray[3].trim();
  return {
    unicode: unicode,
    emoji: emoji,
    name: name
  };
}

var checkGroupRegExp = new RegExp("#\\s*group:\\s*(.*)", "i");
var checkSubgroupRegExp = new RegExp("#\\s*subgroup:\\s*(.*)", "i");
var checkEmojiRegExp = new RegExp("(.*);.*#\\s*([^\\s]+)\\s*(.*)", "i");

var group = void 0,
    subgroup = void 0,
    emoji = void 0;
var id = 1;

var k = 1;
var pureEmojis = [];
var groupEmojis = {};
var currentGroupEmojis = [];

var p = 0;
var prevGroupName = "";

rl.on("line", function (line) {
  if ((group = line.match(checkGroupRegExp)) !== null) {
    var groupName = group[1];
    currentGroup = groupName;
    console.log(" " + k++ + " : " + currentGroup);
    if (!data.hasOwnProperty(currentGroup)) {
      data = _extends({}, data, _defineProperty({}, currentGroup, {}));
    }
    // print(data);
  } else if ((subgroup = line.match(checkSubgroupRegExp)) !== null) {
    var subgroupName = subgroup[1];
    currentSubgroup = subgroupName;
    // print(data);
    if (!data[currentGroup].hasOwnProperty(currentSubgroup)) {
      data = _extends({}, data, _defineProperty({}, currentGroup, _extends({}, data[currentGroup], _defineProperty({}, currentSubgroup, {}))));
    }
  } else if ((emoji = line.match(checkEmojiRegExp)) !== null) {
    var emojiObj = createEmoji(emoji);
    if (emojiObj.emoji.includes("🤩") || emojiObj.emoji.includes("🤨") || emojiObj.name.includes("skin tone")) {
      return;
    }
    pureEmojis = [].concat(_toConsumableArray(pureEmojis), [emojiObj]);
    groupEmojis = _extends({}, groupEmojis, _defineProperty({}, currentGroup, _extends({}, groupEmojis[currentGroup], _defineProperty({}, emojiObj.unicode, emojiObj))));
    if (currentGroup && currentSubgroup) {
      data = _extends({}, data, _defineProperty({}, currentGroup, _extends({}, data[currentGroup], _defineProperty({}, currentSubgroup, _extends({}, data[currentGroup][currentSubgroup], _defineProperty({}, emojiObj.unicode, emojiObj))))));
    }
  }
});

var categories = {
  "1": "Smileys & People",
  "2": "Animals & Nature",
  "3": "Food & Drink",
  "4": "Travel & Places",
  "5": "Activities",
  "6": "Objects",
  "7": "Symbols",
  "8": "Flags"
};

var createGroupedEmojis = function createGroupedEmojis() {
  currentGroupEmojis = [];
  _.forEach(categories, function (category) {
    var emojisWithCategory = data[category];
    var emojisRequired = _.map(emojisWithCategory, function (emojis) {
      return _.map(emojis, function (e) {
        return e;
      });
    });
    currentGroupEmojis = _extends({}, currentGroupEmojis, _defineProperty({}, category, _.flattenDeep(emojisRequired)));
  });
};

rl.on("close", function () {
  outputStream.write(JSON.stringify(data, null, 2));
  pureEMojiOutputStream.write(JSON.stringify(pureEmojis, null, 2));
  createGroupedEmojis();
  groupEmojiOutputStream.write(JSON.stringify(currentGroupEmojis, null, 2));
  console.log("Finished");
});
