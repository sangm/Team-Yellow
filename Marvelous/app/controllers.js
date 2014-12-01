angular.module('app')
    .controller('MainController', function($scope, TemplateService, BusinessService, $resource) {
        $scope.businessInfo = TemplateService.getBusinessInfo();
	$scope.hostname = $scope.businessInfo.hostname;
        $scope.changeBussinessInfo = function(type, info) {
            if (type == 'businessName') { TemplateService.setBusinessName(info); }
            else if (type == 'businessEmail') TemplateService.setBusinessEmail(info);
            else if (type == 'phoneNumber')   TemplateService.setPhoneNumber(info);
            else if (type == 'domainName')    TemplateService.setDomainName(info);
            $scope.businessInfo = TemplateService.getBusinessInfo();
        };
	var domain = $resource('/');
	var test = $resource('/domains');
	console.log(domain.get());
	console.log(test.get());
    })
