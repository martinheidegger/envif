"use strict";
module.exports = function (field, true_out, false_out) {
	var value = (process.env[field] || "").toLowerCase().replace(/^\s+|\s+$/g, '');
	return (value === "true" || value === "1") ? true_out : false_out;
}