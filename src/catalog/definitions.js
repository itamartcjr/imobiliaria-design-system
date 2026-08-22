const { componentCoreDefs } = require("./components-core");
const { componentFormDefs } = require("./components-forms");
const { componentNavigationDefs } = require("./components-navigation");
const { componentFeedbackDataDefs } = require("./components-feedback-data");
const { realEstateDefs } = require("./real-estate");
const { patternDefs } = require("./patterns");

const componentDefs = [
  ...componentCoreDefs,
  ...componentFormDefs,
  ...componentNavigationDefs,
  ...componentFeedbackDataDefs,
];

module.exports = { componentDefs, realEstateDefs, patternDefs };
