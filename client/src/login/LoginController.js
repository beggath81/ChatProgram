"use strict";

angular.module("chatApp").controller("LoginController", 
	//ef við ætlum að minifia kóðan
	["$scope", "ChatResource", 
											         //Sjá ChatResource.js
	function LoginController($scope, $location, ChatResource) { 

		//hér setjum við upphafsgildi á username 
		$scope.user = "username";
		
		$scope.errorMessage = "";

		//hér sækjum við usernamið sem kemur inn frá login.html
		$scope.onLogin =function onLogin() {
			ChatResource.login($scope.user, $scope.pass, function(success)
				if(!success) {
						$scope.errorMessage = "Login failed";
				}else {
					$location("#/roomlist");				
				}

				
		    })          
		};

		$scope.onChangeUsername = function onChangeUsername() {
			if($scope.name.length > 3) {
				//TODO:
			}
		}
	}]);


