var config = {
 apiKey: "AIzaSyDrT5NaAzDvBgVJp-2B4bd2kU5d5xHEFM8",
    authDomain: "missionedstore.firebaseapp.com",
    databaseURL: "https://missionedstore-default-rtdb.firebaseio.com",
    projectId: "missionedstore",
    storageBucket: "missionedstore.appspot.com",
    messagingSenderId: "414324993753",
    appId: "1:414324993753:web:9ad07d7598b9b778ec58c8",
    measurementId: "G-WEGDTRKTWP"
 
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
    window.open('index1.html','_self');
    }
});