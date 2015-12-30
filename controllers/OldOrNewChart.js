app.controller("OldOrNewChart", ["Auth", "$scope", "$firebaseArray", "$location", "$routeParams",
	function(Auth, $scope, $firebaseArray, $location, $routeParams){
	
	$scope.userAuth = Auth.$getAuth();

	var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid+"/Charts/");

	console.log("$scope.userAuth", $scope.userAuth);

	$scope.savedcharts = $firebaseArray(ref);



	$scope.loadoldchart = function(id){

		console.log("id", id);
		$location.path("/MainPage/"+id);
	};
	



}]);