var testApp = angular.module('testApp', ["ngRoute"]);
    testApp.config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'views/FirstTest.html',
                controller: 'FirstTestController'
            })
            .when('/charts',
            {
               templateUrl: 'views/SecondTest.html',
               controller: 'SecondTestController'
            });
    });