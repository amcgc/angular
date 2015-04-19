var sidebarMenu = angular.module('sidebarMenu', ['ngRoute'])
.config(function ($locationProvider, $routeProvider) {
	$routeProvider
    .when('/', {templateUrl: '/partials/hello.html'})
	.when('/example', {templateUrl: '/partials/example.html'})
	.otherwise({redirectTo: '/'})
});

sidebarMenu.controller("MenuCtrl", function ($scope, $location, Menu) {
	$scope.menu = Menu;

	$scope.getClass = function (item) {
		if ($location.path() == item.href.substr(2)) {
			return "active";
		}
		return "";
	}
});

sidebarMenu.directive("menu", function () {
	return {
		restrict: "A",
		template: '<ul class="nav nav-list">' +
		'<li class="nav-header">Examples</li>' +
		'<li ng-repeat="item in menu.items" ng-class="getClass(item)"><a href="{{item.href}}">{{item.name}}</a></li>' +
		'</ul>'
	}
});

sidebarMenu.factory('Menu', function () {
	var Menu = {};
	Menu.items = [
	              {
	            	  class: "",
	            	  href: "/#!/index.html",
	            	  name: "Hello world"
	              },
	              {
	            	  class: "",
	            	  href: "/#/example",
	            	  name: "Example"
	              }
	              ];
	return Menu;
});