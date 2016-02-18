"use strict";

//hér eru sett inn libary
var chatApp = angular.module("chatApp", ["ngRoute"]) 

//hér erum við að tengja síðurnar saman. T.d. loginController fylgir login.html 
chatApp.config('$routProvider', function ($routeProvider) {
	$routeProvider
	//þegar ég er á upphafsíðu s.s. í urlinu ChatProgram/
	.when("/", {     //þá vil ég að login síðan sé sýnileg
		templateUrl: '/login/login.html',
		controller: 'LoginContoller'
	})
	.when("/roomlist", {
		templateUrl: "/roomlist.html",
		controller: "RoomlistController"
		//fer í ákv herbergi með id = ? tekið úr roomControler
	}).when("/room/id", {
		templateUrl: "/room.html",
		controller: "roomControler"
		
		//Og svo framleiðis


		//ef eitthvað annað er slegið inn í urlið þá er farið aftur á upphafssíðu
	}).otherwise({
		redirectTo: "/",



	});

});