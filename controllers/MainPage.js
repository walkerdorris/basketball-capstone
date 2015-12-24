app.controller("MainPage", ["Auth","$scope","$firebaseArray","$uibModal", function(Auth, $scope, $firebaseArray, $uibModal){

// *******************************
// ************FIREBASE***********
// *******************************

  $scope.userAuth = Auth.$getAuth();

  var ref = new Firebase("https://basketball-capstone.firebaseio.com/"+$scope.userAuth.uid);

  console.log("$scope.userAuth", $scope.userAuth);

  $scope.updatedcharts = $firebaseArray(ref.child('gameBoard'));
  console.log("$scope.updatedcharts", $scope.updatedcharts);



// *******************************
// ***********GAMEBOARD***********
// *******************************

  $scope.gameBoard = [];

  for(var i = 0; i < 1174; i++) {
    $scope.gameBoard.push(" ");
  }
	
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
          console.log("MainPage id",id);
          return id;
        }, 
        gameBoard: function(){
          console.log("MainPage gameboard",$scope.gameBoard);
          return $scope.gameBoard;
        }
      }
    });
  };

  console.log("$scope.displayShotSelectionModal()", $scope.displayShotSelectionModal());

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

console.log("working sorta");

//*****************************
//********SAVE TO FB***********
//*****************************


$scope.updatedcharts.$save($scope.gameBoard);

// ************OR****************


// $firebase(new Firebase(ref)).$child('Charts').$child('gameBoard').$set($scope.gameBoard);


// ********OR*************


// $scope.updateChart = function(){
//   console.log("$scope.updateChart");
//   $scope.updatedcharts.$save(
//   {
//     gameBoard:$scope.gameBoard
//   })
// };

// console.log("$scope.gameBoard", $scope.gameBoard);

// $scope.updateChart();
// console.log("$scope.updateChart()", $scope.updateChart);
   
















// ***********************
// ****TABLE LOOP*********
// ***********************

// var table = document.createElement('table'), tr, td, row, cell;
// for (row = 0; row < 4; row++) {
// 	tr = document.createElement("tr");
// 	for (cell = 0; cell < 10; cell++) {
// 		var cellIndex = row * 10 + cell;
// 		td = document.createElement("td");
// 		tr.appendChild(td);
// 		// td.innerHTML = row * 15 + cell;
// 		td.id = cellIndex;
// 		td.setAttribute("ng-click", "displayShotSelectionModal("+ cellIndex + ")");
// 	}
// 	table.appendChild(tr);
// }
// document.getElementById("court").appendChild(table);


}]);
