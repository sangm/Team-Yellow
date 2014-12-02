angular.module('app')
    .controller('MainController', function($scope, TemplateService) {
        $scope.businessInfo = TemplateService.getBusinessInfo();
        $scope.changeBussinessInfo = function(type, info) {
            if (type == 'businessName') { TemplateService.setBusinessName(info); }
            else if (type == 'businessEmail') TemplateService.setBusinessEmail(info);
            else if (type == 'phoneNumber')   TemplateService.setPhoneNumber(info);
            else if (type == 'domainName')    TemplateService.setDomainName(info);
            $scope.businessInfo = TemplateService.getBusinessInfo();
        };
	$scope.registerDomain = function(businessInfo) {
            console.log(businessInfo);
            // Check if values are null
            // and hostname
            //Isn't working at the moment, not sure why
            if (businessInfo.businessName === "")
                alert("Business Name field is empty!")
	    else if (businessInfo.phoneNumber === "")
		alert("Phone number field is empty!")
	    else if (businessInfo.domainName === "")
		alert("Domain name field is empty!")
	    else if (businessInfo.businessEmail === "")
		alert("Email field is emtpy!")
	    console.log("Hmmm"); //What is this for?
    })
