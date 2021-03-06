"use strict";

angular.module("chatApp").controller("LoginController", 
	//ef við ætlum að minifia kóðan
	["$scope", "$location", "ChatResource", 
											         //Sjá ChatResource.js
	function LoginController($scope, $location, ChatResource) { 

		//hér setjum við upphafsgildi á username 
		$scope.user = "";
		
		$scope.errorMessage = "";

		//hér sækjum við usernamið sem kemur inn frá login
		$scope.onLogin = function onLogin() {
			ChatResource.login($scope.user, function(success) {
				if(!success) {
						$scope.errorMessage = "Login failed";
				}else {
  
		           
					$location("/roomlist/roomlist/");				
				}		
		    });         
		};
		
		$scope.onChangeUsername = function onChangeUsername() {
			if($scope.name.length > 3) {
				$scope.name = $scope.user;
				//TODO:
			}
		};
	}]);


