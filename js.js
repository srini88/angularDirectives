angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
	$scope.user1 = {
		name :'Srinivas',
		job :"front  end developer",
		friends :[
		'viswanath',
		'palghat'
		]
	}
	$scope.user2 = {
		name :'PVS',
		job :"PHP developer",
		friends :[
		'viswanath',
		'palghat'
		]
	}
});

angular.module('app').directive('userInfoCard', function(){
	return {   
		templateUrl :"userInfo.html",
		restrict:"E",
		//making user object visibile to the directive.s
		scope:{
			user : '='
		},
		controller :function($scope){
			$scope.collapsed = false;
			$scope.knightMe = function(user){
				user.rank = "jesus";
			}
			$scope.collapse = function(){
				$scope.collapsed = !$scope.collapsed;
			}
			//console.log($scope)
		}
	}
})


//what does this isolated scope solve....

////having multiple users --- and bind that user object to directive from the html....
//added two users...
/////this directive is truly reususable...remember  scope :{ 
//set it to obj
//}


//dont use multiple directives --- will mess up scope...

//now want to collapge entire user info card..on a click