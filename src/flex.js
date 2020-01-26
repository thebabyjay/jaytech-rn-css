const flex = {
  display: "flex"
};

const flexRow = {
  display: "flex",
  flexDirection: "row"
};
const flexColumn = {
  display: "flex",
  flexDirection: "column"
};

const start = "flex-start";
const center = "center";
const end = "flex-end";
const around = "space-around";
const between = "space-between";
const baseline = "baseline";
const stretch = "stretch";
const auto = "auto";

const flexDirections = [
  { name: "row", value: flexRow },
  { name: "column", value: flexColumn }
];
const justifyContentValues = [
  { name: "Start", value: start },
  { name: "Center", value: center },
  { name: "End", value: end },
  { name: "Between", value: between },
  { name: "Around", value: around }
];
const alignItemsValues = [
  { name: "Start", value: start },
  { name: "Center", value: center },
  { name: "End", value: end },
  { name: "Baseline", value: baseline },
  { name: "Stretch", value: stretch }
];

const alignSelfValues = [
  { name: "Auto", value: auto },
  { name: "Start", value: start },
  { name: "Center", value: center },
  { name: "End", value: end },
  { name: "Baseline", value: baseline },
  { name: "Stretch", value: stretch }
];

let flexLayouts = {};
flexDirections.forEach(dir => {
  justifyContentValues.forEach(justify => {
    alignItemsValues.forEach(align => {
      const name = `${dir.name}${justify.name}${align.name}`;
      flexLayouts[name] = {
        ...dir.value,
        justifyContent: justify.value,
        alignItems: align.value
      };
    });
  });
});

alignSelfValues.forEach(align => {
  const name = `alignSelf${align.name}`;
  flexLayouts[name] = {
    alignSelf: align.value
  };
});

let flexSizes = {};
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(
  flexSize => (flexSizes[`flex${flexSize}`] = { flex: flexSize })
);

let flexGrow = {};
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(
  grow => (flexGrow[`flexGrow${grow}`] = { flexGrow: grow })
);

const stylesheet = {
  // BASICS
  flex,
  flexRow,
  flexColumn,

  // SIZING
  // FLEX SHRINK DOES NOT WORK IN REACT NATIVE
  ...flexSizes,
  ...flexGrow,

  // OTHER FLEX
  flexWrap: {
    flexWrap: "wrap"
  },

  // FLEX STYLES
  ...flexLayouts
};

module.exports = stylesheet;
