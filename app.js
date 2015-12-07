var app = angular.module("Basketball-Capstone-App", ["firebase", "ngRoute"]);

  app.config(["$routeProvider",
  	function($routeProvider){
  		$routeProvider
  		.when("/", {
  			templateUrl: "partials/loginPage.html",
  			controller: "AuthCtrl as authCtrl"
  		})
  		.when("/MainPage", {
  			templateUrl: "partials/MainPage.html",
  			controller: "MainPage as main"
  		})
  		.otherwise({redirectTo: "/"});
  	}]);