sap.ui.define([],
	function () {

		"user strict";

		return {
			toUpperCase: function (sName) {
				if (!sName) {
					return "";
				} else
					return sName.toUpperCase();
			}
		};
		
	});