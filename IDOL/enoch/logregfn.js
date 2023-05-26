//logininfo object
var loginInfo= [
  {email: "user1", password: "pass1", address: "noob"},
  {email: "user2", password: "pass2"},
  {email: "user3", password: "pass3"}
]


//LOGIN FUNCTION

function loginfn(){

  var emailv = document.getElementById("email").value
  var passwordv = document.getElementById("password").value
  var emailerr =  document.getElementById("emailalert")
  var passwerr = document.getElementById("passalert")
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var form = document.getElementById("loginform")

  //empty email or password


  //correct email and password
  if(emailv != "" && passwordv != "")
    {
      for(i = 0; i< loginInfo.length; i++){
        if(emailv == loginInfo[i].email && passwordv == loginInfo[i].password){
            console.log("correct login info");
            form.submit();
            return
        }
      }
    }

    if(emailv == "" && passwordv ==""){
      emailerr.textContent = "Email is empty";
        setTimeout(()=>{
          document.getElementById('emailalert').textContent = "";}, 1000);
    
        passwerr.textContent = "Password is empty";
        setTimeout(()=>{
          document.getElementById('passalert').textContent = "";}, 1000);
      }

    else{

      //incorrect email and password
      emailerr.textContent = "Username NOT match";
        setTimeout(()=>{emailerr.textContent = "";email.value = "";}, 1000);   
      passwerr.textContent = "Password NOT match";
        setTimeout(()=>{document.getElementById('passalert').textContent="";password.value="";}, 1000);

      
    }

  }
  

  //Show Password function
  function ShowPassFn(){
      var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}







//-------------------------------REGISTER FUNCTION--------------------//

function registerfn(){
  var newemail = document.getElementById("newemail")
  var newpassword = document.getElementById("newpassword")
  var cpw = document.getElementById("c.password")
  var fullname = document.getElementById("name")
  var address = document.getElementById("address")
  var dob = document.getElementById("dob")

  var nameerr = document.getElementById("namealert")
  var newemailerr = document.getElementById("newemailalert")
  var newpwerr = document.getElementById("newpasswalert")
  var cpwerr = document.getElementById("confirmpw")
  var adderr = document.getElementById("addressalert")
  var doberr = document.getElementById("dobalert")
  
var rgform = document.getElementById("registerform")
  
  

  var newuser = {
      email: newemail.value,
      password: newpassword.value,
      name: fullname.value,
      address: address.value,
      dob: dob.value
  }


  if(newemail.value != "" || newpassword.value != "" ){
  //check repeated email or password length<8
  for(i=0; i < loginInfo.length; i++) {
    if (newemail.value == loginInfo[i].email){
    console.log("repeated")
    newemailerr.textContent = "Email repeated";
    setTimeout(()=>{
      newemailerr.textContent = "";}, 3000);
    return
  }else if (newpassword.value != "" && newpassword.value.length < 8){
    newpwerr.textContent ="MIN 8 characters";
    setTimeout(()=>{newpwerr.textContent = "";newpassword.value = "";}, 2000)
    return
  }
}
}


  //check empty input
  if (fullname.value == ""){
    nameerr.textContent = "Empty Username";
    setTimeout(()=>{
      nameerr.textContent = "";}, 3000);
  }
  
  if (newemail.value == ""){
    newemailerr.textContent = "Empty Email";
    setTimeout(()=>{
      newemailerr.textContent = "";}, 3000);
  }
  
  if (newpassword.value == ""){
    newpwerr.textContent = "Empty Pasword";
    setTimeout(()=>{
      newpwerr.textContent = "";}, 3000);
  }

  if (cpw.value == ""){
    cpwerr.textContent = "Please Enter Confirm Password";
    setTimeout(()=>{
      cpwerr.textContent = "";}, 5000);
  }

  if (address.value == ""){
    adderr.textContent = "Empty Address";
    setTimeout(()=>{
      adderr.textContent = "";}, 3000);
  }

  if (dob.value == ""){
    doberr.textContent = "Empty Birthday";
    setTimeout(()=>{
      doberr.textContent = "";}, 3000);
  }
  



  
//add new user info
  loginInfo.push(newuser)
  console.log(loginInfo)
  // rgform.submit(function(e)
  // {e.preventDefault();})
}




//TESTING FUNCTION

//check userinfo array
function checkvar(){
  console.log(loginInfo)
  return
}
