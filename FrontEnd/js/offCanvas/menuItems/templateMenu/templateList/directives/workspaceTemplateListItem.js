angular.module('myApp.directives.workspaceTemplateListItem', []).
	directive('workspaceTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/workspace-template-list-item.html"
		};
	});