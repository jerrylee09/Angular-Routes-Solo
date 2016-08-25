var myApp = angular.module("myApp", ["ngRoute"]);



myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/batman", {
        templateUrl: "/views/partials/batman.html",
        controller: "batmanController"
      }).
      when("/flash", {
        templateUrl: "/views/partials/flash.html",
        controller: "flashController"
      }).
      when("/deadpool", {
        templateUrl: "/views/partials/deadpool.html",
        controller: "deadpoolController"
      }).
      when("/taskmaster", {
        templateUrl: "/views/partials/taskmaster.html",
        controller: "taskmasterController"
      }).
      otherwise({
        redirectTo: "/batman"
      });
}]);

myApp.controller("batmanController", ["$scope", function($scope){
    $scope.name = "Batman",
    $scope.detail = "is a vigilante in DC comic.",
    $scope.image = "batman.png"
    $scope.hideCharacter = false;
}]);

myApp.controller("flashController", ["$scope", function($scope){
  $scope.name = "Flash",
  $scope.detail = "is a hero in DC comic.",
  $scope.image = "flash.png"
  $scope.hideCharacter = false;
}]);

myApp.controller("deadpoolController", ["$scope", function($scope){
  $scope.name = "Deadpool",
  $scope.detail = "is a anti-hero in Marvel comic.",
  $scope.image = "deadpool.png"
  $scope.hideCharacter = false;
}]);

myApp.controller("taskmasterController", ["$scope", function($scope){
$scope.name = "Taskmaster",
  $scope.detail = "is a villian in Marvel comic.",
  $scope.image = "taskmaster.png"
  $scope.hideCharacter = false;
}]);