// STYLES
const containerStyles = require("./containers");
const flexStyles = require("./flex");
const marginAndPaddingStyles = require("./marginAndPadding");
const textStyles = require("./text");

// CONSTANTS
const colors = require("./colors");

const mergedStyles = Object.assign(
  {},
  textStyles,
  containerStyles,
  marginAndPaddingStyles,
  flexStyles
);

// console.log(mergedStyles)
// console.log(colors);

module.exports = mergedStyles;

exports.colors = colors;
exports.palette = colors;

exports.j = mergedStyles;
exports.styles = mergedStyles;
