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
});
//creating a directive... give a name ..it returns an object..
angular.module('app').directive('userInfoCard', function(){
	return {   
		template :"Name :{{user.name}} <br/><div ng-show='user.job'>job: {{user.job}} </div>  <div>Friends: <div ng-repeat='friend in user.friends'>{{friend}}</div></div>   ",
		restrict:"E"  
	}
})


//our directive can handle html or data from scope object..
//it can also handle other directives..
//use ng-show

//we wil do one div for each friend


//if I put the next div in the next line..code is getting broken--find out