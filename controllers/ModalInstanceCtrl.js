app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, myCellId, gameBoard, updateFirebase, makeCounter, missCounter, totalShots) {
  console.log("Beginning of ModalInstance.js");

  $scope.cellId = myCellId; 
  $scope.gameBoard = gameBoard;
  console.log("$scope.gameBoard", $scope.gameBoard);
  $scope.updateFb = updateFirebase;

  $scope.makeCounter = makeCounter;
  console.log("modal $scope.makeCounter", $scope.makeCounter);
  $scope.missCounter = missCounter;
  $scope.totalShots = totalShots;

  // ****************************
  // ********MAKES W/ MODAL******
  // ****************************

   $scope.make = function() {
      $scope.gameBoard[$scope.cellId] = 'make';
      $scope.makeCounter++;
      console.log("make function in modal", $scope.makeCounter);
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