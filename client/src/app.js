"use strict";

//hér eru sett inn libary
angular.mondule("chatApp", ["ui.bootstrap",""]) 

//hér erum við að tengja síðurnar saman. T.d. loginController fylgir login.html 
.config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "src/login/login.html",
		controller: "LoginContoller"
	}).when("/roomlist", {
		templateUrl: "src/roomlist/roomlist.html",
		controller: "RoomlistController"
		//fer í ákv herbergi með id = ? tekið úr roomControler
	}).when("/roomlist/id", {
		templateUrl: ""
		//Og svo framleiðis
	});

});