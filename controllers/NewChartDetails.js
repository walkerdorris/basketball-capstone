app.controller("NewChartDetails", 
	["Auth","$scope","$firebaseArray","$location", function(Auth,$scope, $firebaseArray, $location){

	$scope.userAuth = Auth.$getAuth();

	var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid+"/Charts/");

	$scope.charts = $firebaseArray(ref);
	$scope.gameBoard = [];
	


  	for(var i = 0; i < 1174; i++) {
      $scope.gameBoard.push(" ");
  	  }

	$scope.newChartDetails = {};

	$scope.addChart = function(){
		$scope.charts.$add(
		  {
			title: $scope.newChartDetails.title,
			date: $scope.newChartDetails.date,
			gameBoard: $scope.gameBoard
		  }).then(function(ref){
			  $location.path("/MainPage/"+ref.key())
		  });
		  $location.path("/MainPage")
	  };

}]);

		