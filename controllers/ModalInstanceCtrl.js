app.controller("ModalInstanceCtrl", function ($scope, $modalInstance, myCellId) {

	$scope.cellId = myCellId;
	console.log("$scope.cellId", $scope.cellId)
	$scope.cancel = function() {
		$modalInstance.dismiss("cancel");
	};

// ****************************
// ********MAKES W/ MODAL******
// ****************************

$scope.make = function() {
	var madeShot = "Make";
	$("#" + $scope.cellId).html(madeShot);
	return $scope.gameboard[0][0] = "Make";
};


 // ***************************
 // ******MISSES W/ MODAL******
 // ***************************
 
 $scope.miss = function() {
 	var missedShot = "Miss";
 	$("#" + $scope.cellId).html(missedShot);
 	return "Miss";
 };

 // ***************************
 // *******DELETE W/MODAL******
 // ***************************
 
 $scope.deleted = function() {
 	var deletedShot = "";
 	$("#" + $scope.cellId).html("");
 	return $scope.gameboard[0][0] = "";
 };


});