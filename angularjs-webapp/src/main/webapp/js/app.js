
//wrapped in function as best practice : avoid polluting global namespace
(function() {
	// modules encapsulate code, can inject dependant modules
	// empty dependencies because none required
	var app = angular.module('storeModule', ['store-directives']);

//	caps case, suffixed with Controller (best practice or convention?)
//	second param is executed when controller is called
//	this === controller
	app.controller('StoreController', ['$http', function($http) {
		var store = this;
		store.products=[];
		$http.get('data/store-products.json').success(function (data) {
			store.products = data;
		});
		
	}]);
	
	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn=Date.now();
			product.reviews.push(this.review);
			this.review={};
		};
	});

})();

