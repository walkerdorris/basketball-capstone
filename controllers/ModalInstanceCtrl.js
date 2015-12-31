app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, myCellId, gameBoard, updateFirebase) {
  console.log("Beginning of ModalInstance.js");

  $scope.cellId = myCellId; 
  $scope.gameBoard = gameBoard;
  $scope.updateFb = updateFirebase;
  console.log("$scope.updateFb", $scope.updateFb);

  // ****************************
  // ********MAKES W/ MODAL******
  // ****************************

   $scope.make = function() {
      $scope.gameBoard[$scope.cellId] = 'make';
      console.log("$scope.gameBoard", $scope.gameBoard);
      $scope.updateFb.$save({gameBoard: $scope.gameBoard}).then(function() {
        alert('Profile saved!');
      }).catch(function(error) {
        alert('Error!');
      });;
      console.log("$scope.gameBoard after save attempt", $scope.gameBoard);
      $modalInstance.close({gameBoard:$scope.gameBoard});
   };

   // ***************************
   // ******MISSES W/ MODAL******
   // ***************************
   
   $scope.miss = function() {
      $scope.gameBoard[$scope.cellId] = 'miss';
      $scope.updateFb.update({gameBoard: $scope.gameBoard});
      $modalInstance.close({gameBoard:$scope.gameBoard});
   };

   // ***************************
   // *******DELETE W/MODAL******
   // ***************************
   
   $scope.deleted = function() {
      $scope.gameBoard[$scope.cellId] = " ";
      $scope.updateFb.update({gameBoard: $scope.gameBoard});
      $modalInstance.close({gameBoard:$scope.gameBoard});
   };

     console.log("End of ModalInstance.js");

});