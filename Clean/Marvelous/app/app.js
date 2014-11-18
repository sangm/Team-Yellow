angular.module('app', ['ngRoute', 'ngTouch']);

angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'MainController'
            })
           .when('/so-boxy', {
                templateUrl: 'partials/so-boxy.html',
            })
            .when('/banded', {
                templateUrl: 'partials/banded.html',
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html',
            })
            .otherwise({redirectTo: '/'})
    });

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
    })

angular.module('app')
    .service('TemplateService', function() {
        this.name = 'Business Name';
        this.email = 'Business Email';
        this.phoneNumber = 'Business Phone#';
        this.domainName = 'Domain Name';

        this.setBusinessName = function(name)   { this.name = name; };
        this.setBusinesEmail = function(email)  { this.email = email; };
        this.setPhoneNumber  = function(number) { this.phoneNumber = number; };
        this.setDomainName   = function(domain) { this.domainName  = domain; };

        this.getBusinessInfo = function() {
            return {
                businessName: this.name,
                businessEmail: this.email,
                phoneNumber: this.phoneNumber,
                domainName: this.domainName
            };
        };
    });
