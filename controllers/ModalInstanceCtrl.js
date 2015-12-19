app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, myCellId, gameBoard) {
  $scope.cellId = myCellId; 
  $scope.gameBoard = gameBoard;

  // ****************************
  // ********MAKES W/ MODAL******
  // ****************************

   $scope.make = function() {
      $scope.gameBoard[$scope.cellId] = 'make';
      $modalInstance.close({gameBoard:$scope.gameBoard});
   };

   // ***************************
   // ******MISSES W/ MODAL******
   // ***************************
   
   $scope.miss = function() {
      $scope.gameBoard[$scope.cellId] = 'miss';
      $modalInstance.close({gameBoard:$scope.gameBoard});
   };

   // ***************************
   // *******DELETE W/MODAL******
   // ***************************
   
   $scope.deleted = function() {
      $scope.gameBoard[$scope.cellId] = '';
      $modalInstance.close({gameBoard:$scope.gameBoard});
   };
});