app.controller("AuthCtrl", 
	['$firebaseAuth',
	 'Auth',
	 '$location',
	 function($firebaseAuth, Auth, $location) {
	 	console.log("Authentication Standing By...");
	 	this.AuthData = null;
// **********REGISTRATION**********
// ********************************

	 	this.AuthRegister = function(){
	 		console.log("Registration being called...");

	 		console.log(this.emailregister);
	 		Auth.$createUser({
	 			email: this.emailregister,
	 			password: this.passwordregister
	 		}).then(function(authData){
	 			console.log("You Have Successfully Registered", authData);
	 		}).catch(function(error){
	 			console.log("An Error Occured During Registration", error);
	 		});
	 	};
// ***********LOGIN*************
// *****************************
	 	console.log("Login Standing By...")
	 	this.AuthLogin = function(){
	 		console.log("Logging in...");

	 		Auth.$authWithPassword({
	 			email:this.emaillogin,
	 			password: this.passwordlogin
	 		}).then(function(authData){
	 			this.AuthData= authData;
	 			$location.path("/MainPage");
	 			console.log ("Authentication Data: ", authData);
	 		},function(error){
	 			console.log(error);
	 		})
	 	// 	.bind(this).catch(function(error){
			// 	console.log("Authentication Failed: ", error);
			// });
	 	};
	 }
	]);