angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
	$scope.user = {
		name :'Srinivas',
		job :"front  end developer",
		friends :[
		'viswanath',
		'palghat'
		]
	}
	$scope.knightMe = function(user){
		console.log("clicked");
		console.log(user)  //Object {name: "Srinivas", job: "front  end developer", friends: Array[2]}
		user.rank = "jesus";

	}

});

angular.module('app').directive('userInfoCard', function(){
	return {   
		templateUrl :"userInfo.html",
		restrict:"E"
	}
})

