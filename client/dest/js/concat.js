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


module.exports = function ( grunt ) {
 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-min');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.registerTask('default', ['concat',  'cssmin', 'jshint', 'uglify']);
 var taskConfig = {
   jshint: {
     src: ['**/*.js'],
     gruntfile: ['Gruntfile.js'],
     options: {
     	options: {
  curly:  true,
  immed:  true,
  newcap: true,
  noarg:  true,
  sub:    true,
  boss:   true,
  eqnull: true,
  node:   true,
  undef:  true,
  globals: {
    _:       false,
    jQuery:  false,
    angular: false,
    moment:  false,
    console: false,
    $:       false,
    io:      false
  }
 }

     }
   },

   concat: {
  js: {
    src: 'src/js/*.js',
    dest: 'dest/js/concat.js'
  },
  css: {
    src: 'src/css/*.css',
    dest: 'dest/css/concat.css'
  }
},

min: {
  js: {
    src: 'dest/js/concat.js',
    dest: 'dest/js/concat.min.js'
  }
},
cssmin: {
  css:{
    src: 'dest/css/concat.css',
    dest: 'dest/css/concat.min.css'
  }
}
 };
 grunt.initConfig(taskConfig);
}
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
		    })         
		};
		
		$scope.onChangeUsername = function onChangeUsername() {
			if($scope.name.length > 3) {
				$scope.name = $scope.user;
				//TODO:
			}
		}
	}]);




angular.module("chatApp").controller("RoomController",
function RoomController($scope, $routeParams, $location) {
	var id = $routeParams.id;

	/*var queryString = $location.search():
	var status = queryString["status"];

	if (status === "available") {

	}*/
});

angular.module("chatApp").controller("RoomlistController",
	
	function RoomlistController ($scope, socket) {
		
		//biðjum um listann frá server
		socket.emit("rooms");

		//erum að taka við listanum frá server
		socket.on("roomlist", function(roomlist) {
			//console.log(roomlist); - til að skoða

			//látum angular vita að það var breyting
			$scope.$apply(function() {
				//sækja herbergi frá server
				$scope.roomlist = roomlist;
			});

		});		
			
});
//6a min 30
"use strict";

//hér eru sett inn libary
var chatApp = angular.module("chatApp", ["ngRoute"]) ;

//hér erum við að tengja síðurnar saman. T.d. loginController fylgir login.html 
chatApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	//þegar ég er á upphafsíðu s.s. í urlinu ChatProgram/
	.when("/", {     //þá vil ég að login síðan sé sýnileg
		templateUrl: "src/login/login.html",
		controller: "LoginController"
	})
	.when("/roomlist", {
		templateUrl: "src/roomlist/roomlist.html",
		controller: "RoomlistController"
		//fer í ákv herbergi með id = ? tekið úr roomControler
	})
	.when("/room/id", {
		templateUrl: "src/room/room.html",
		controller: "RoomController"
		
		//Og svo framleiðis


		//ef eitthvað annað er slegið inn í urlið þá er farið aftur á upphafssíðu
	}).otherwise({
		redirectTo: "/",



	});

}]);
app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }

    off: function(eventName, callback) {
      socket.off(eventName, function() {

      });
    }
  };
});