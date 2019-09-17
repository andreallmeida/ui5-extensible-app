sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.extensible.controller.BaseController", {

		// Pesquisa do ROUTER
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		// Pesquisa do MODEL
		getModel: function (sModel) {
			return this.getOwnerComponent().getModel(sModel);
		},

		// 
		getEventBus: function () {
			return sap.ui.getCore().getEventBus();
		},

		// Muda o Modelo
		setModel: function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		// Retorna o texto do arquivo 
		getText: function (sText, aArgs) {
			return this.getModel("i18n").getResourceBundle().getText(sText, aArgs);
		}

	});
});