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
	console.log($scope);
});

angular.module('app').directive('userInfoCard', function(){
	return {   
		templateUrl :"userInfo.html",
		restrict:"E",
		controller :function($scope){
			$scope.knightMe = function(user){
				console.log("clicked");
				console.log(user)  //Object {name: "Srinivas", job: "front  end developer", friends: Array[2]}
				user.rank = "jesus";
			}
			console.log($scope);
		}
	}
})



// knight button is in directive but the method is in the controller..we are violating encapsulation..

// so give directive its own controller..

///now knight me is served from the directive itself...

// above scope in the mainCtrl and in the controler inside userInfoCard is same..