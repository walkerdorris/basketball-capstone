app.controller("OldOrNewChart", ["Auth", "$scope", "$firebaseArray", "$location", "$routeParams",
	function(Auth, $scope, $firebaseArray, $location, $routeParams){
	
	$scope.userAuth = Auth.$getAuth();

	var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid+"/Charts/");

	$scope.savedcharts = $firebaseArray(ref);
	
	$scope.loadoldchart = function(id){
		$location.path("/MainPage/"+id);
	};
}]);

		




	


