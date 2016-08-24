var myApp = angular.module("myApp", ["ngRoute"]);



myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/homer", {
        templateUrl: "/views/partials/homer.html",
        controller: "homerController"
      }).
      // when("/marge", {
      //   templateUrl: "/views/partials/marge.html",
      //   controller: "margeController"
      // }).
      when("/bart", {
        templateUrl: "/views/partials/bart.html",
        controller: "bartController"
      }).
      when("/lisa", {
        templateUrl: "/views/partials/lisa.html",
        controller: "lisaController"
      }).
      when("/maggie", {
        templateUrl: "/views/partials/maggie.html",
        controller: "maggieController"
      }).
      otherwise({
        redirectTo: "/homer"
      });
}]);

myApp.controller("homerController", ["$scope", function($scope){
    $scope.name = "Homer",
    $scope.detail = "Love Duff beer",
    $scope.image = "homer_simpson.png"
    $scope.hideSimpson = false;
}]);

// myApp.controller("margeController", ["$scope", function($scope){
//   $scope.firstName = "marge",
//   $scope.lastName = "simpson"
//   $scope.myVar = false;
//   $scope.toggle = function() {
//   $scope.myVar = !$scope.myVar;
//   };
// }]);

myApp.controller("bartController", ["$scope", function($scope){
  $scope.name = "Bart",
  $scope.detail = "Love prank call Moe",
  $scope.image = "bart_simpson.png"
  $scope.hideSimpson = false;
}]);

myApp.controller("lisaController", ["$scope", function($scope){
  $scope.name = "Lisa",
  $scope.detail = "Love Music",
  $scope.image = "lisa_simpson.png"
  $scope.hideSimpson = false;
}]);

myApp.controller("maggieController", ["$scope", function($scope){
$scope.name = "Maggie",
  $scope.detail = "Love her pacifier",
  $scope.image = "maggie_simpson.png"
  $scope.hideSimpson = false;
}]);