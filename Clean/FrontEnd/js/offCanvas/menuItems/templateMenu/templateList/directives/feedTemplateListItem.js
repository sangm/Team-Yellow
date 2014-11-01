angular.module('myApp.directives.feedTemplateListItem', []).
	directive('feedTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/feed-template-list-item.html"
		};
	});