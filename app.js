var app = angular.module("Basketball-Capstone-App", ["firebase", "ngRoute"]);

  app.config(["$routeProvider",
  	function($routeProvider){
  		$routeProvider
  		.when("/", {
  			templateUrl: "partials/loginPage.html",
  			controller: "AuthCtrl as authCtrl"
  		})
  	}]);