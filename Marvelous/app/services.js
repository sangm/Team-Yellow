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
    })

    .service('BusinessService', function($resource) {

        this.sendInfo = function(){
            //is this how to correctly utilize the endpoint? Am i using $resource correctly?//
        var info = $resource('api.ares.sangm.net/api/routes.py', {

                    json: JSON.stringify({
                    businessName: TemplateService.name,
                    businessEmail: TemplateService.email,
                    phoneNumber: TemplateService.phoneNumber,
                    domainName: TemplateService.domainName,
                    })
                });
        info.$save()};
    


	return resource("http://localhost:5000");
    });

