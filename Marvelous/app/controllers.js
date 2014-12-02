
angular.module('app')
    .controller('MainController', function($scope, TemplateService, BusinessService, DomainService, $resource) {
	$scope.domainExist = false;
        $scope.businessInfo = TemplateService.getBusinessInfo();
	$scope.hostname = $scope.businessInfo.hostname;
        $scope.changeBussinessInfo = function(type, info) {
            if (type == 'businessName')       TemplateService.setBusinessName(info);
            else if (type == 'businessEmail') TemplateService.setBusinessEmail(info);
            else if (type == 'phoneNumber')   TemplateService.setPhoneNumber(info);
            else if (type == 'domainName')    TemplateService.setDomainName(info);
            $scope.businessInfo = TemplateService.getBusinessInfo();
        };
	$scope.registerDomain = function(businessInfo, form_valid) {
	    if (form_valid) {
		
	    }
	    else {
		alert ("Fill out the forms!");
	    }
	}
	$scope.$watch('businessInfo.domainName', function(domain) {
	    if (domain !== "")
		DomainService.get({domain:domain}).$promise.then(function(result) {
		    $scope.domainExist = result.result;
		});
	})
    })
