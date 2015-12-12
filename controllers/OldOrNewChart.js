app.controller("OldOrNewChart", ["Auth", "$scope", "$firebaseArray", "$location",
	function(Auth, $scope, $firebaseArray, $location){
	
	$scope.userAuth = Auth.$getAuth();

	var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid+"/Charts/");

	console.log("$scope.userAuth", $scope.userAuth);

	$scope.savedcharts = $firebaseArray(ref);

	
}]);