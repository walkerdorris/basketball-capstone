// This is currently found in MainPage.js and is not hooked up to anything


app.controller("ModalCtrl", 
	["$scope","$uibModal",
	function($scope, $uibModal){

		

$scope.displayShotSelectionModal = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/partials/ShotSelection',
      controller: 'ShotSelection as shotSelection',
      size: 'sm'
      
    });
    }
      
	}]);



	