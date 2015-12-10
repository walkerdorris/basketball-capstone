app.controller("NewChartDetails", 
	["Auth","$scope","$firebaseArray","$location", function(Auth,$scope, $firebaseArray, $location){

	$scope.userAuth = Auth.$getAuth();

	var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid+"/Charts/");

	console.log("$scope.userAuth", $scope.userAuth);

	$scope.charts = $firebaseArray(ref);
	var gameboard = 
	[["","",""],
	 ["","",""],
	 ["","",""]
	]

	$scope.newChartDetails = {};

	$scope.addChart = function(){
		console.log("hi");
		$scope.charts.$add(
		{
			title: $scope.newChartDetails.title,
			date: $scope.newChartDetails.date,
			gameboard: gameboard
		})
		$location.path("/MainPage")
	};

	}]);