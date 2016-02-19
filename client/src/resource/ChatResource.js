//here tolum við við bakendann
"use strict";

angular.module("chatApp").factory("ChatResource", 
	function ChatResource(socket){
		return {
			//þau föll í bakendanum sem við viljum getað kallað í 
			login: function login(user, callback){
				socket.on(adduser, function(){
					var args = user; // veit ekki hvað á að vera hér
					$scope.$apply(function() {
						callback.apply(socket, args);
					});
				
				});
			},
			getRoomList: function getRoomList(callback) {
				//TODO
			},
		}
	});

