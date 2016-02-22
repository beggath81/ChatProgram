
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