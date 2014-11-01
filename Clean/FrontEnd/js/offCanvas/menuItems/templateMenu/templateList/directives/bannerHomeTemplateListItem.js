angular.module('myApp.directives.bannerHomeTemplateListItem', []).
	directive('bannerHomeTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/banner-home-template-list-item.html"
		};
	});