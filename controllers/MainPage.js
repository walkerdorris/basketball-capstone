app.controller("MainPage", ["Auth","$scope","$firebaseArray","$uibModal", "$routeParams", "$firebaseObject", function(Auth, $scope, $firebaseArray, $uibModal, $routeParams, $firebaseObject){
// *******************************
// ************FIREBASE***********
// *******************************
  $scope.userAuth = Auth.$getAuth();
  $scope.gameId = $routeParams.id;
  var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid+"/Charts/"+$scope.gameId);

  $scope.makeCounter = 0;
  $scope.missCounter = 0;
  $scope.totalShots = 0;
  
  $scope.game = $firebaseObject(ref);
  $scope.gameBoard=[];
  $scope.game.$loaded().then(function(){
    $scope.gameBoard = $scope.game.gameBoard;
    for (var i=0; i<$scope.gameBoard.length; i++){
      if($scope.gameBoard[i]==='miss'){
        $scope.missCounter++;
      } else if($scope.gameBoard[i]==='make'){
        $scope.makeCounter++;
      }
    }  
    $scope.totalShots =$scope.missCounter + $scope.makeCounter;
  });

// *****************************
// *********MODAL***************
// *****************************
  $scope.animationsEnabled = true;
  $scope.displayShotSelectionModal = function (id) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/partials/ShotSelection.html',
      controller: 'ModalInstanceCtrl',
      size: 'sm',
      resolve: {
        myCellId: function () {
          return id;
        }, 
        gameBoard: function(){
          return $scope.gameBoard;
        },
        updateFirebase: function(){
          return ref;
        },
        makeCounter: function(){
          return $scope.makeCounter;
        },
        missCounter: function(){
          return $scope.missCounter;
        },
        totalShots: function(){
          return $scope.totalShots;
        }
      }
    });
    modalInstance.result.then(function (result) {
        $scope.gameBoard=result.gameBoard;
        $scope.makeCounter = result.makeCounter;
        $scope.missCounter = result.missCounter;
        $scope.totalShots = result.totalShots;
    }, function () {

    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}]);