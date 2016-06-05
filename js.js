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
		restrict:"E",
		replace :true 
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




// directives come in 3 types... each has different purpose..

// we already did Component type of directive -- a widget--userinfo is a widget directive or also called componenet directive...

// 2nd type is a decorator....commonly used...adds more stuff to exisitng stuff or tag..

// ng-show and ng-hide --examples.


// 3rd type =- ng-repeat -- structural or templating.....ng-repeat..

//with this stuff, you could see user-info-card element ni the html itself--- not so good for html validity reasons... . so better to remove it and add some new shit..

//so use replace --- in the return statement  --
//replace:true
//however our code does not know to handle replaace....so add a div to our userInfo.html..need to have a single root html element for replace to work

//added div now it started working again


///but the best practice is not to use the replace attribute....after 1.3 it is deprecated...so wtf?