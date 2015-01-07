"use strict";
function cli() {
	var argv = process.argv
	  , field = argv[2]
	  , true_out = argv[3]
	  , false_out = argv[4]
	  , result;

	if (!field || !true_out) {
		console.log(require("./usage"))
	}

	result = require("../envif")(field, true_out, false_out)
	if (typeof result === "string") {
		console.log(result);
	}
}
module.exports = cli;