app.factory("Auth", [
	'$firebaseAuth',
	function($firebaseAuth){
		var ref = new Firebase('https://basketball-capstone.firebaseio.com/')
		return $firebaseAuth(ref);
	}]);