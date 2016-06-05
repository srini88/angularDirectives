angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
	$scope.user = {
		name :'Srinivas',
		job :"front  end developer"
	}
});
//creating a directive... give a name ..it returns an object..
angular.module('app').directive('userInfoCard', function(){
	return {   
		template :"Name :{{user.name}} <br/> job: {{user.job}}",
		restrict:"E"  //ONLY CUSTOM ELEMENTS
	}
})