app.controller("MainPage", ["Auth","$scope","$firebaseArray","$uibModal", "$routeParams", function(Auth, $scope, $firebaseArray, $uibModal, $routeParams){
console.log("Beginning of MainPage.js");
// *******************************
// ************FIREBASE***********
// *******************************

  $scope.userAuth = Auth.$getAuth();
  $scope.gameId = $routeParams.id;
  var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid+"/Charts/"+$scope.gameId);

  




	
// *****************************
// *********SHOT IMAGES*********
// *****************************

  $scope.greendot="../images/green_dot.png"

  $scope.animationsEnabled = true;
  
// *****************************
// *********MODAL*********
// *****************************

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
        } 
      }
    });
  };
          
          
          

  


  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };





console.log("End of MainPage.js");
}]);
