angular.module('myApp.directives.blogTemplateListItem', []).
	directive('blogTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/blog-template-list-item.html"
		};
	});