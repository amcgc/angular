var examplesApp = angular.module('examplesApp', []);

examplesApp.controller("AppCtrl", function ($scope) {
    $scope.substringExample = function ($scope) {
    	var search = "This is a long string containing many queries";
    	var query = prompt("Please input query to search: " + search);
    	
        if (search.indexOf(query, 0) >=-1) 
        	alert("Found query");
        else
        	alert ("Query not found");
    }
})
