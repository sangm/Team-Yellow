angular.module('myApp.directives.productTemplateListItem', []).
	directive('productTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/product-template-list-item.html"
		};
	});