app.controller("MainPage", ["$scope","$uibModal", function($scope, $uibModal){
 console.log("working")
	
// *******************************
// ***********GAMEBOARD***********
// *******************************


	$scope.gameboard = 
	[[null,null,null],
	 [null,null,null],
	 [null,null,null]
	]
	
// *****************************
// *********SHOT IMAGES*********
// *****************************


	$scope.greendot="../images/green_dot.png"




// ***********************
// *********MODAL*********
// ***********************


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
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };






 // *********************************
 // ****CLICK FUNCTIONS FOR TABLE****
 // *********************************
 

 // $("#0").on("click", function(){
	// var zero= $("#0").html("X");
	// return $scope.gameboard[0][0] = "X";

// });	


//  $("#1").on("click", function(){
// 	var zero= $("#1").html("X");
// 	return $scope.gameboard[0][1] = "X";

// });	

//  $("#2").on("click", function(){
// 	var zero= $("#2").html("X");
// 	return $scope.gameboard[0][2] = "X";

// });	

//  $("#3").on("click", function(){
// 	var zero= $("#3").html("X");
// 	return $scope.gameboard[1][0] = "X";

// });	

//  $("#4").on("click", function(){
// 	var zero= $("#4").html("X");
// 	return $scope.gameboard[1][1] = "X";

// });	

//  $("#5").on("click", function(){
// 	var zero= $("#5").html("X");
// 	return $scope.gameboard[1][2] = "X";

// });	

//  $("#6").on("click", function(){
// 	var zero= $("#6").html("X");
// 	return $scope.gameboard[2][0] = "X";

// });	

//  $("#7").on("click", function(){
// 	var zero= $("#7").html("X");
// 	return $scope.gameboard[2][1] = "X";

// });	

//  $("#8").on("click", function(){
// 	var zero= $("#8").html("X");
// 	return $scope.gameboard[2][2] = "X";

// });	




// ****************************
// ********MAKES W/ MODAL******
// ****************************

 $scope.make = function() {
 	var madeShot = "Make";
    $("#0").html(madeShot);
    return $scope.gameboard[0][0] = "Make";

 };

 // ***************************
 // ******MISSES W/ MODAL******
 // ***************************
 
 $scope.miss = function() {
 	var missedShot = "Miss";
 	$("#0").html(missedShot);
 	return $scope.gameboard[0][0] = "Miss";
 };

 // ***************************
 // *******DELETE W/MODAL******
 // ***************************
 
 $scope.deleted = function() {
 	var deletedShot = "";
 	$("#0").html("");
 	return $scope.gameboard[0][0] = "";
 };

 
// ****************************
// *********CLOSE MODAL********
// ****************************



 // $scope.cancel = function (result) {
 //    $uibModal.close(result);
 //  };




// ***********************
// ****TABLE LOOP*********
// ***********************
var table = document.createElement('table'), tr, td, row, cell;
for (row = 0; row < 2; row++) {
	tr = document.createElement("tr");
	for (cell = 0; cell < 10; cell++) {
		var cellIndex = row * 10 + cell;
		td = document.createElement("td");
		tr.appendChild(td);
		// td.innerHTML = row * 15 + cell;
		td.id = cellIndex;
		td.setAttribute("ng-click", "displayShotSelectionModal ("+ cellIndex + ")");
	}
	table.appendChild(tr);
}
document.getElementById("court").appendChild(table);


}]);