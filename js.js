angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){

});
//creating a directive... give a name ..it returns an object..
angular.module('app').directive('userInfoCard', function(){
	return {   //returning obj
		//template is the attribbute -- as a string--this text is displayed..
		template :"User Info Card",
		restrict:"A"  //NOW CHANGED VIEW TO ATTRIBUTE 
	}
})