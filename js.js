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
		templateUrl :"userInfo.html",
		restrict:"E"  
	}
})


//our directive can handle html or data from scope object..
//it can also handle other directives..
//use ng-show

//we wil do one div for each friend


//if I put the next div in the next line..code is getting broken--find out


//difficult to do template here it self...so better to use external template..
//change it to templateUrl for external linking of templates

//awesome features of directives.........external templateUrl..