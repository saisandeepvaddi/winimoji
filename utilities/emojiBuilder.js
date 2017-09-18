"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = require("fs");
var readline = require("readline");
var path = require("path");
// const _ = require("lodash");

var inputFilePath = path.resolve(__dirname, "..", "data", "emoji-test.txt");
var outputFilePath = path.resolve(__dirname, "..", "data", "emojis.json");
var pureEmojiOutput = path.resolve(__dirname, "..", "data", "pure-emojis.json");

var data = [];

// Create output file if doesn't exist

fs.closeSync(fs.openSync(outputFilePath, "w"));
fs.closeSync(fs.openSync(pureEmojiOutput, "w"));
var inputStream = fs.createReadStream(inputFilePath, {
  encoding: "utf-8"
});
var outputStream = fs.createWriteStream(outputFilePath, {
  encoding: "utf-8"
});

var pureEMojiOutputStream = fs.createWriteStream(pureEmojiOutput, {
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
    pureEmojis = [].concat(_toConsumableArray(pureEmojis), [emojiObj]);
    if (currentGroup && currentSubgroup) {
      data = _extends({}, data, _defineProperty({}, currentGroup, _extends({}, data[currentGroup], _defineProperty({}, currentSubgroup, _extends({}, data[currentGroup][currentSubgroup], _defineProperty({}, emojiObj.unicode, emojiObj))))));
    }
  }
});

rl.on("close", function () {
  outputStream.write(JSON.stringify(data, null, 2));
  pureEMojiOutputStream.write(JSON.stringify(pureEmojis, null, 2));
  console.log("Finished");
});
