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
	return $resource();
    });

