angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
	$scope.user = {
		name :'Srinivas',
		jobd :"front  end developer"
	}
});
//creating a directive... give a name ..it returns an object..
angular.module('app').directive('userInfoCard', function(){
	return {   
		template :"Name :{{user.name}} <br/> <div ng-show='user.job'>job: {{user.job}} </div>",
		restrict:"E"  
	}
})


//our directive can handle html or data from scope object..
//it can also handle other directives..
//use ng-show