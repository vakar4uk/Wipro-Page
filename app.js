var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/dashboard.html',
        css: 'css/dashboard-styles.css',
        controller: 'mainController'
    })

    .when('/email', {
        templateUrl: 'pages/email.html',
         css: 'css/email-styles.css',
        controller: 'mainController'
    })
    
    .when('/othersettings', {
        templateUrl: 'pages/othersettings.html',         
        controller: 'mainController'
    })

});

myApp.controller('mainController', ['$scope','$routeParams','$route', '$location', function($scope,$routeParams, $route, $location) {

    

}]);