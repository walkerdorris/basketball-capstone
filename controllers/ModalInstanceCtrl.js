app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, myCellId, gameBoard, updateFirebase, makeCounter, missCounter, totalShots) {
  $scope.cellId = myCellId; 
  $scope.gameBoard = gameBoard;
  $scope.updateFb = updateFirebase;

  $scope.makeCounter = makeCounter;
  $scope.missCounter = missCounter;
  $scope.totalShots = totalShots;

  // ****************************
  // ********MAKES W/ MODAL******
  // ****************************
   $scope.make = function() {
      $scope.gameBoard[$scope.cellId] = 'make';
      $scope.makeCounter++;
      $scope.updateFb.update({gameBoard: $scope.gameBoard});
      $scope.totalShots = $scope.makeCounter+$scope.missCounter;
      $modalInstance.close({gameBoard:$scope.gameBoard, makeCounter:$scope.makeCounter, missCounter:$scope.missCounter, totalShots:$scope.totalShots});
   };

   // ***************************
   // ******MISSES W/ MODAL******
   // ***************************
   $scope.miss = function() {
      $scope.gameBoard[$scope.cellId] = 'miss';
      $scope.missCounter++;
      $scope.updateFb.update({gameBoard: $scope.gameBoard});
      $scope.totalShots = $scope.makeCounter+$scope.missCounter;
      $modalInstance.close({gameBoard:$scope.gameBoard, makeCounter:$scope.makeCounter, missCounter:$scope.missCounter, totalShots:$scope.totalShots});
   };

   // ***************************
   // *******DELETE W/MODAL******
   // ***************************
   $scope.deleted = function() {
      $scope.gameBoard[$scope.cellId] = '';
      $scope.updateFb.update({gameBoard: $scope.gameBoard});
      $scope.makeCounter=0;
      $scope.missCounter=0;
      for (var i=0; i<$scope.gameBoard.length; i++){
        if($scope.gameBoard[i]==='miss'){
          $scope.missCounter++;
        } else if($scope.gameBoard[i]==='make'){
          $scope.makeCounter++;
        }
      }  
      $scope.totalShots = $scope.makeCounter+$scope.missCounter;
      $modalInstance.close({gameBoard:$scope.gameBoard, makeCounter:$scope.makeCounter, missCounter:$scope.missCounter, totalShots:$scope.totalShots});
   };
});