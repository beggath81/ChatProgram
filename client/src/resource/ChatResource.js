//here tolum við við bakendann
"use strict";

angular.module("chatApp").factory("ChatResource", 
	function ChatResource(){
		return {
			//þau föll í bakendanum sem við viljum getað kallað í 
			login: function login(user, callback){
				//TODO
			},

			getRoomList: function getRoomList(callback) {
				//TODO
			},
		}

	});