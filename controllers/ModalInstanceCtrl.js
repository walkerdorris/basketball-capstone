app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, myCellId, gameBoard, updateFirebase) {
  console.log("Beginning of ModalInstance.js");

  $scope.cellId = myCellId; 
  $scope.gameBoard = gameBoard;
  $scope.updateFb = updateFirebase;

  // ****************************
  // ********MAKES W/ MODAL******
  // ****************************

   $scope.make = function() {
      $scope.gameBoard[$scope.cellId] = 'make';
      $scope.updateFb.update({gameBoard: $scope.gameBoard});
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
      $scope.gameBoard[$scope.cellId] = '';
      $scope.updateFb.update({gameBoard: $scope.gameBoard});
      $modalInstance.close({gameBoard:$scope.gameBoard});
   };

     console.log("End of ModalInstance.js");

});