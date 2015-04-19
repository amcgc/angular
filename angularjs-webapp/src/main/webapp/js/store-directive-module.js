(function () {
	var storeDirectives = angular.module("store-directives", []);
	
	// Element directive for components
	storeDirectives.directive("productDescription", function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/product-description-template.html'
		};
	});
	
	storeDirectives.directive("productReviews", function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/product-review-template.html'
		};
	});

	// Attribute directive for mixin/adding behaviour to existing components/elements
	storeDirectives.directive("productSpecs", function() { 
		return {
			restrict: 'A',
			templateUrl: 'partials/product-specs.html'
		};
	});
	
	storeDirectives.directive("productTabs", function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/product-tabs-template.html',
			controller: function() {
				var selectedTab=1;

				this.isSet = function (query) {
					return (selectedTab===query);
				}

				this.set = function (request) {
					if ( typeof request==="number" && !isNaN(request)) {
						selectedTab=request;
					}
				}
			},
			controllerAs: 'tab'
		};
	});
	
	storeDirectives.directive("productGallery", function() {
		return {
			restrict: 'E',
			templateUrl: "partials/product-gallery-template.html",
			controller: function() {
				var currentImg=1;

				this.getCurrentImg = function() {return currentImg};
			},
			controllerAs: "gallery"
		}
	});
})();