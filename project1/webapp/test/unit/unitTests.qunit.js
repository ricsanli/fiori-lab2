/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"lab2/project1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
