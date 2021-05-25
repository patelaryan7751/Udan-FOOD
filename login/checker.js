var config = {
    apiKey: "AIzaSyBb55BaJ6cURgS9PwtXcrDHJjqyRq5mmTk",
    authDomain: "udan-food.firebaseapp.com",
    projectId: "udan-food",
    storageBucket: "udan-food.appspot.com",
    messagingSenderId: "396627571354",
    appId: "1:396627571354:web:63f6c7b28d609e7a11e523"
 
  };
     firebase.initializeApp(config);
    console.log(firebase);
firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
       var user = firebase.auth().currentUser;
       console.log(user);
       if(user.emailVerified!=true)
           {
       user.sendEmailVerification().then(function() {
            
   var emailVerified = user.emailVerified;

        
        window.open('verify-email.html','_self');
           
    
}).catch(function(error) {
  // An error happened.
});
           }
           var cliref = firebase.database().ref('credential/');
       cliref.orderByChild("email").equalTo(user.email).on("value", function(data){
          
           if(data.val()){
               window.open('../index.html','_self');
}
           else{
               window.open('database.html','_self');
           }

   } );
   }
    else{
    window.open('login.html','_self');
    }
});