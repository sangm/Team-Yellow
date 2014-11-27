angular.module('myApp.directives.soBoxyTemplateListItem', []).
	directive('soBoxyTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/so-boxy-template-list-item.html"
		};
	});