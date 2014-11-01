angular.module('app', ['ngRoute', 'ngTouch']);

angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'MainController'
            })
            .when('/add', {
                templateUrl: 'partials/add.html',
                controller: 'AddController'
            })
            .otherwise({redirectTo: '/'})
    });

angular.module('app')
    .controller('MainController', function($scope) {
        $scope.test = "123123123"
    })
    .controller('AddController', function($scope) {
        
    });

angular.module('app')
    .service('PhotoService', function() {
        
    });
