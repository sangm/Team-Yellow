angular.module('myApp.directives.contactTemplateListItem', []).
	directive('contactTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/contact-template-list-item.html"
		};
	});