sap.ui.define([
	"ovly/extensible/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"ovly/extensible/model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("ovly.extensible.controller.S2", {
		
		formatter: formatter,

		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			var oRoute = oRouter.getRoute("detail");
			oRoute.attachPatternMatched(this.onPatternMatched, this);

			var oI18NModel = this.getOwnerComponent().getModel("i18n");
			var sTitle = oI18NModel.getResourceBundle().getText("s2_title");

			var oViewModel = new JSONModel({
				busy: false,
				title: sTitle
			});

			this.getView().setModel(oViewModel, "view");

		},

		onBack: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("default");
		},

		onPatternMatched: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments;
			var sProductId = oArguments.id;
			var oView = this.getView();
			var oDataModel = oView.getModel();

			oDataModel.metadataLoaded().then(function () {
				var sPath = oDataModel.createKey("Products", {
					Id: sProductId
				});

				var mParameters = {
					select: "Id,Name,Price,MainCategoryName"
				};

				if (this.hookChangeBindingParameters) {
					mParameters = this.hookChangeBindingParameters(mParameters);
				}
				oView.bindElement({
					path: "/" + sPath,
					parameters: mParameters,
					events: {
						change: this.onChange.bind(this)
					}
				});
			}.bind(this));
		},

		onChange: function (oEvent) {
			var oI18NModel = this.getOwnerComponent().getModel("i18n");
			var oContext = this.getView().getBindingContext();
			var sProductId = oContext.getProperty("Id");
			var sTitle = oI18NModel.getResourceBundle().getText("s2_title", [sProductId]);

			var oViewModel = this.getView().getModel("view");
			oViewModel.setProperty("/title", sTitle);
		}

	});

});