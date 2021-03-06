(function(angular) {
  var AppController = function($scope, Promotion) {
    Promotion.query(function(response) {
      $scope.promotions = response ? response : [];
    });
    
    $scope.addPromotion = function(description) {
      new Promotion({
        description: description,
        checked: false
      }).$save(function(promotion) {
        $scope.promotions.push(promotion);
      });
      $scope.newPromotion = "";
    };
    
    $scope.updatePromotion = function(promotion) {
      promotion.$update();
    };
    
    $scope.deletePromotion = function(promotion) {
      promotion.$remove(function() {
        $scope.promotions.splice($scope.promotions.indexOf(promotion), 1);
      });
    };
  };
  
  AppController.$inject = ['$scope', 'Promotion'];
  angular.module("myApp.controllers").controller("AppController", AppController);
}(angular));