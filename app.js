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

});

myApp.controller('mainController', ['$scope','$routeParams','$route', '$location', function($scope,$routeParams, $route, $location) {

    $scope.$watch(function()
  {
    return ($route.current && $route.current.css) ? $route.current.css : 'styles.css';
  }, 
  function(value) 
  {
    $scope.css = value;
  });

}]);