


firebase.auth().onAuthStateChanged(function(user) {
  if(user){
  console.log(user.email)
     
       var cliref = firebase.database().ref('credential/');
       cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){
           
          var newVoke = data.val();
           document.getElementById("name").textContent=`${newVoke.name}`;   
           document.getElementById("phone").textContent=`${newVoke.phone}`;
           document.getElementById("email").textContent=`${newVoke.email}`;
           document.getElementById("add1").textContent=`${newVoke.add1}`;
           document.getElementById("add2").textContent=`${newVoke.add2}`;
           
       })
}
    else{
      window.open('login/index.html','_self');
    }
});

    

