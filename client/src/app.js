"use strict";

//hér eru sett inn libary
angular.mondule("chatApp", ["ui.bootstrap","ngRoute"]) 

//hér erum við að tengja síðurnar saman. T.d. loginController fylgir login.html 
.config(function ($routeProvider) {
	$routeProvider
	//þegar ég er á upphafsíðu s.s. í urlinu ChatProgram/
	.when("/", {     //þá vil ég að login síðan sé sýnileg
		templateUrl: "src/login/login.html",
		controller: "LoginContoller"
	})
	.when("/roomlist", {
		templateUrl: "src/roomlist/roomlist.html",
		controller: "RoomlistController"
		//fer í ákv herbergi með id = ? tekið úr roomControler
	}).when("/room/id", {
		templateUrl: "src/room/room.html",
		controller: "roomControler"
		//Og svo framleiðis
	});


});