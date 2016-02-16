"use strict";
angular.module("chatApp").controller("LoginController", 
	["$scope", "ChatResource", //ef við ætlum að minifia kóðan
	function LoginController($scope, ChatResource) { //Sjá ChatResource.js

		ChatResource.login($scope.user, $scope.pass, function(success)
			if(!success) {

			}else {

			}

			)
	}]);


