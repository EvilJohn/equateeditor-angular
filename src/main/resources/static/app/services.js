(function(angular) {
	var PromotionFactory = function($resource) {
		return $resource('/promotions/:id', {
			id : '@id'
		}, {
			update : {
				method : "PUT"
			},
			remove : {
				method : "DELETE"
			}
		});
	};

	PromotionFactory.$inject = [ '$resource' ];
	angular.module("myApp.services").factory("Promotion", PromotionFactory);
}(angular));