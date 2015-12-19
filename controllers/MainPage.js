app.controller("MainPage", ["$scope","$uibModal", function($scope, $uibModal){
// *******************************
// ***********GAMEBOARD***********
// *******************************

  $scope.gameBoard = [];

  for(var i = 0; i < 39; i++) {
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
          return id;
        }, 
        gameBoard: function(){
          return $scope.gameBoard;
        }
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


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
