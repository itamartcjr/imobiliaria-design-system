const { registerGettingStarted } = require("./pages-getting-started");
const { registerFoundations } = require("./pages-foundations");
const { registerTesting } = require("./pages-testing");
const { registerGuidelines } = require("./pages-guidelines");
const { registerResources } = require("./pages-resources");

function registerStaticPages(ctx) {
  registerGettingStarted(ctx);
  registerFoundations(ctx);
  registerTesting(ctx);
  registerGuidelines(ctx);
  registerResources(ctx);
}

module.exports = { registerStaticPages };
