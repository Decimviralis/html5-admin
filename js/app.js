let testApp = angular.module('testApp', ['ngRoute','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: '../views/FirstTest.html',
                controller: 'FirstTestController'
            });
        $routeProvider.when('/charts',
            {
               templateUrl: '../views/SecondTest.html',
               controller: 'SecondTestController'
            });
    });