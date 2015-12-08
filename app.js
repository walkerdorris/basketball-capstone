var app = angular.module("Basketball-Capstone-App", ["firebase", "ngRoute"]);

  app.config(["$routeProvider",
  	function($routeProvider){
  		$routeProvider
  		.when("/", {
  			templateUrl: "partials/loginPage.html",
  			controller: "AuthCtrl as authCtrl"
  		})
      .when("/OldOrNewChart", {
        templateUrl: "partials/OldOrNewChart",
        controller: "OldOrNewChart as oldOrNewChart" 
      })
      .when("/NewChartDetails", {
        templateUrl: "partials/NewChartDetails",
        controller: "NewChartDetails as newChartDetails"
      })
  		.when("/MainPage", {
  			templateUrl: "partials/MainPage.html",
  			controller: "MainPage as main"
  		})
  		.otherwise({redirectTo: "/"});
  	}]);