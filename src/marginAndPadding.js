// set margin & padding directions
const marginTop = "marginTop";
const marginRight = "marginRight";
const marginBottom = "marginBottom";
const marginLeft = "marginLeft";

const paddingTop = "paddingTop";
const paddingRight = "paddingRight";
const paddingBottom = "paddingBottom";
const paddingLeft = "paddingLeft";

const spaceBreakpoints = [5, 10, 15, 20, 25, 50, 100];

const marginDirections = [
  { label: "t", value: [marginTop] },
  { label: "r", value: [marginRight] },
  { label: "b", value: [marginBottom] },
  { label: "l", value: [marginLeft] },
  { label: "x", value: [marginLeft, marginRight] },
  { label: "y", value: [marginTop, marginBottom] },
  { label: "", value: [marginTop, marginRight, marginBottom, marginLeft] }
];
const paddingDirections = [
  { label: "t", value: [paddingTop] },
  { label: "r", value: [paddingRight] },
  { label: "b", value: [paddingBottom] },
  { label: "l", value: [paddingLeft] },
  { label: "x", value: [paddingLeft, paddingRight] },
  { label: "y", value: [paddingTop, paddingBottom] },
  { label: "", value: [paddingTop, paddingRight, paddingBottom, paddingLeft] }
];
const marginLayouts = {};
const paddingLayouts = {};

// creating margin combos
marginDirections.forEach(dir => {
  spaceBreakpoints.forEach(bp => {
    marginLayouts[`m${dir.label}${bp}`] = dir.value.reduce((acc, cur) => {
      acc[cur] = bp;
      return acc;
    }, {});
  });
});

// creating padding combos
paddingDirections.forEach(dir => {
  spaceBreakpoints.forEach(bp => {
    paddingLayouts[`p${dir.label}${bp}`] = dir.value.reduce((acc, cur) => {
      acc[cur] = bp;
      return acc;
    }, {});
  });
});

const stylesheet = {
  // MARGIN
  ...marginLayouts,

  // PADDING
  ...paddingLayouts
};

module.exports = stylesheet;
