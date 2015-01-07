"use strict";

var Lab = require("lab"),
    code = require("code"),
    lab = Lab.script(),
    expect = code.expect,
    describe = lab.describe,
    before = lab.before,
    beforeEach = lab.beforeEach,
    after = lab.after,
    it = lab.it,
    envif = require("../lib/cli");

exports.lab = lab;

describe("envif", function () {
	var logBackup = console.log
	  , logStack
	  , envField = "WATCH";
	before(function (done) {
		console.log = function (value) {
			logStack.push(value);
		}
		done();
	});
	beforeEach(function (done) {
		logStack = [];
		delete process.env[envField];
    	delete process.argv[4];
    	delete process.argv[3];
    	delete process.argv[2];
		done();
	})
    it("should show the help if no argument is given", function (done) {
    	envif();
    	expect(logStack[0]).to.equal(require("../lib/usage"))
    	done();
    });
    it("should show the help if only the environment variable is given", function (done) {
    	process.argv[2] = envField;
    	envif();
    	expect(logStack[0]).to.equal(require("../lib/usage"))
    	done();
    });
    ["true", "TRUE", "True", "1"].forEach(function (value) {
	    it("should show the output if the environment variable is set to `" + value + "`", function (done) {
	    	process.argv[2] = envField;
	    	process.argv[3] = "hello";
	    	process.env[envField] = value;
	    	envif();
	    	expect(logStack[0]).to.equal("hello");
	    	done();
	    });	
    });
    [undefined, "false", "FALSE", "False", "0"].forEach(function (value) {
	    it("should show no output if the environment variable was set to " + value, function (done) {
	    	process.argv[2] = envField;
	    	process.argv[3] = "hello";
	    	process.env[envField] = value;
	    	envif();
	    	expect(logStack[0]).to.equal(undefined);
	    	done();
	    });
	    it("should show the false output if the environment variable was set to " + value, function (done) {
	    	process.argv[2] = envField;
	    	process.argv[3] = "hello";
	    	process.argv[4] = "holla";
	    	process.env[envField] = value;
	    	envif();
	    	expect(logStack[0]).to.equal("holla");
	    	done();
	    });
    });
    after(function (done) {
    	console.log = logBackup;
    	done();
    })
});