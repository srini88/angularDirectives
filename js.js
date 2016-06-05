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
	console.log($scope)
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
			$scope.knightMe = function(user){
				user.rank = "jesus";
			}
			console.log($scope)
		}
	}
})



// knight button is in directive but the method is in the controller..we are violating encapsulation..

// so give directive its own controller..

///now knight me is served from the directive itself...

// above scope in the mainCtrl and in the controler inside userInfoCard is same..


//before inherited scope -- - i expanded the console. log from both $scopes ...both have same id...


// create a directive with inherited scope...

///after createing shared scope , with scoep:true/// the ids' are diffferent in console.logs

//child scope has a parent property........which is themainCtrl..
///still the child scope in directive can access the parent scope user...(that's not the point)
//by setting scope true -- we can add new shit to child - that cannot be seen by the parent..



///Directive with isolated scope..  (no link between mainCtrl and the controller in our directive)

////to make it available --- you got to bind the data .....on an object by object basis..


//what does this isolated scope solve....