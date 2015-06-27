(function(angular) {
  angular.module("myApp.controllers", []);
  angular.module("myApp.services", []);
  angular.module("myApp", ["ngRoute", "ngResource", "myApp.controllers", "myApp.services"]);
}(angular));