app.controller("MainPage", function($scope){
 console.log("working")
	$scope.gameboard = 
	[[null,null,null],
	 [null,null,null],
	 [null,null,null]
	]
	$scope.greendot="../images/green_dot.png"

 $("#0").on("click", function(){
	var zero= $("#0").html("X");
	return $scope.gameboard[0][0] = "X";

});	


 $("#1").on("click", function(){
	var zero= $("#1").html("X");
	return $scope.gameboard[0][1] = "X";

});	

 $("#2").on("click", function(){
	var zero= $("#2").html("X");
	return $scope.gameboard[0][2] = "X";

});	

 $("#3").on("click", function(){
	var zero= $("#3").html("X");
	return $scope.gameboard[1][0] = "X";

});	

 $("#4").on("click", function(){
	var zero= $("#4").html("X");
	return $scope.gameboard[1][1] = "X";

});	

 $("#5").on("click", function(){
	var zero= $("#5").html("X");
	return $scope.gameboard[1][2] = "X";

});	

 $("#6").on("click", function(){
	var zero= $("#6").html("X");
	return $scope.gameboard[2][0] = "X";

});	

 $("#7").on("click", function(){
	var zero= $("#7").html("X");
	return $scope.gameboard[2][1] = "X";

});	

 $("#8").on("click", function(){
	var zero= $("#8").html("X");
	return $scope.gameboard[2][2] = "X";

});	




});