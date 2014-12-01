angular.module('app')
    .controller('MainController', function($scope, TemplateService, BusinessService) {
        $scope.businessInfo = TemplateService.getBusinessInfo();
        $scope.changeBussinessInfo = function(type, info) {
            if (type == 'businessName') { TemplateService.setBusinessName(info)
            else if (type == 'businessEmail') TemplateService.setBusinessEmail(info);
            else if (type == 'phoneNumber')   TemplateService.setPhoneNumber(info);
            else if (type == 'domainName')    TemplateService.setDomainName(info);
            $scope.businessInfo = TemplateService.getBusinessInfo();

        };
        //is the below right? It's my "best guess"//
        $scope.postInfo = function(){ BusinessService.sendInfo() 

        })

        

    })
