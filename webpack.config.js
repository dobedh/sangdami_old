const path = require("path");

const ENTRYFILE = path.resolve(__dirname, "assets", "js", "main.js"); const OUTPUTDIR = path.join(__dirname, "static");

const config = { entry: ENTRYFILE, output: { path: OUTPUTDIR, name: "[name].[format]", }, };

module.exports = config;