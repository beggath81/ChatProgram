"use strict";
angular.module("chatApp").controller("LoginController", 
	["$scope", "ChatResource", //ef við ætlum að minifia kóðan
	function LoginController($scope, $location, ChatResource) { //Sjá ChatResource.js

		//hér setjum við upphafsgildi á username 
		$scope.user = "username";
		
		$scope.errorMessage = "";

		//hér sækjum við usernamið sem kemur inn frá login.html
		$scope.onLogin =function onLogin() {
			ChatResource.login($scope.user, $scope.pass, function(success)
				if(!success) {
						$scope.errorMessage = "Login failed";
				}else {
					$location("/roomlist");	// gæti þurft # á undan /			
				}

				
		    })          
		};

		
	}]);


