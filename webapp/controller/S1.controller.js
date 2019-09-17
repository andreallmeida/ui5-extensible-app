sap.ui.define([
	"ovly/extensible/controller/BaseController",
	"ovly/extensible/model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("ovly.extensible.controller.S1", {

		meuFormatador: formatter,

		onInit: function () {

		},

		onItemPress: function (oEvent) {
			var oParameter = oEvent.getParameters();
			var oListItem = oParameter.listItem;
			var oContext = oListItem.getBindingContext();
			var sProductId = oContext.getProperty("Id");
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				id: sProductId
			});
		}
		
	});

});