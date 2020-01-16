const containerStyles = require("./containers");
const flexStyles = require("./flex");
const marginAndPaddingStyles = require("./marginAndPadding");
const textStyles = require("./text");

const mergedStyles = Object.assign(
  {},
  textStyles,
  containerStyles,
  marginAndPaddingStyles,
  flexStyles
);

console.log(mergedStyles)

module.exports = mergedStyles;
