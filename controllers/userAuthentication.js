app.controller("AuthCtrl", 
	['$firebaseAuth',
	 'Auth',
	 function($firebaseAuth, Auth) {


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
	 }
	]);