'use strict';

angular.module('app')
    .service('TemplateService', function() {
        this.name = '';
        this.email = '';
        this.phoneNumber = '';
        this.domainName = '';
	this.hostname = "sangm.io";
	
        this.setBusinessName = function(name)     { this.name = name; };
        this.setBusinesEmail = function(email)    { this.email = email; };
        this.setPhoneNumber  = function(number)   { this.phoneNumber = number; };
        this.setDomainName   = function(domain)   { this.domainName  = domain; };
	
        this.getBusinessInfo = function() {
            return {
                businessName: this.name,
                businessEmail: this.email,
                phoneNumber: this.phoneNumber,
                domainName: this.domainName,
		hostname: this.hostname
            };
        };
    })

    .service('BusinessService', function($resource) {
	return $resource();
    })

    .factory('DomainService', function($resource) {
	return $resource('http://api.sangm.io/domain/:domain');
    });

