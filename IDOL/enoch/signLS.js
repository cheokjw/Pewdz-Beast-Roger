//check if LS present or nt, otherwise create new array for new LS
let formdata = JSON.parse(localStorage.getItem('formdata')) || [];
let sessdata = JSON.parse(sessionStorage.getItem('userdata')) || [];

//for validate purpose
let validatedata = JSON.parse(localStorage.getItem('formdata'));

//---------------REGISTER FORM FUNCTION----------------------//

//save user info to LS
function signup(){
  var newemail = document.getElementById("newemail")
  var newpassword = document.getElementById("newpassword")
  var fullname = document.getElementById("name")
  var address = document.getElementById("address")
  var dob = document.getElementById("dob")
  var zip = document.getElementById("postcode")
  var state = document.getElementById("state")
  var country = document.getElementById("country") 

  //add new data into LS
  formdata.push({
    email: newemail.value,
    password: newpassword.value,
    name: fullname.value,
    address: address.value,
    zip: zip.value, 
    state: state.value, 
    country: country.value,
    dob: dob.value
  });
  localStorage.setItem('formdata', JSON.stringify(formdata))
  //console.log(localStorage.getItem('formdata'));
}

//*include signup() function
function registerfn(){
  var newemail = document.getElementById("newemail")
  var newpassword = document.getElementById("newpassword")
  var cpw = document.getElementById("c.password")
  var fullname = document.getElementById("name")
  var address = document.getElementById("address")
  var dob = document.getElementById("dob")
  var zip = document.getElementById("postcode")
  var state = document.getElementById("state")
  var country = document.getElementById("country") 

  var nameerr = document.getElementById("namealert")
  var newemailerr = document.getElementById("newemailalert")
  var newpwerr = document.getElementById("newpasswalert")
  var cpwerr = document.getElementById("confirmpw")
  var adderr = document.getElementById("addressalert")
  var doberr = document.getElementById("dobalert")
  var ziperr = document.getElementById("postcodealert")
  var stateerr = document.getElementById("statealert")
  var countryerr = document.getElementById("countryalert")
  
  //check empty input
  if (fullname.value == ""){
    nameerr.textContent = "Empty Username";
    fullname.focus();
    setTimeout(()=>{
      nameerr.textContent = "";}, 3000);
  }
  
  if (newemail.value == ""){
    newemailerr.textContent = "Empty Email";
    newemail.focus();
    setTimeout(()=>{
      newemailerr.textContent = "";}, 3000);
  }
  
  if (newpassword.value == ""){
    newpwerr.textContent = "Empty Pasword";
    newpassword.focus();
    setTimeout(()=>{
      newpwerr.textContent = "";}, 3000);
  }

  if (cpw.value == ""){
    cpwerr.textContent = "Please Enter Confirm Password";
    cpw.focus();
    setTimeout(()=>{
      cpwerr.textContent = "";}, 3000);
  }

  if (address.value == ""){
    adderr.textContent = "Empty Address";
    address.focus();
    setTimeout(()=>{
      adderr.textContent = "";}, 3000);
  }

  if (zip.value == ""){
    ziperr.textContent = "Empty Postal Code";
    zip.focus();
    setTimeout(()=>{
      ziperr.textContent = "";}, 3000);
  }

  if (state.value == ""){
    stateerr.textContent = "Empty State";
    state.focus();
    setTimeout(()=>{
      stateerr.textContent = "";}, 3000);
  }

  if (country.value == ""){
    countryerr.textContent = "Empty Country";
    country.focus();
    setTimeout(()=>{
      countryerr.textContent = "";}, 3000);
  }

  if (dob.value == ""){
    doberr.textContent = "Empty Birthday";
    dob.focus();
    setTimeout(()=>{
      doberr.textContent = "";}, 3000);
  }


  if (fullname.value == "" || newemail.value == "" || newpassword.value == "" || dob.value == "" || address.value == "" || zip.value=="" || state.value=="" || country.value=="" || dob.value == "" ){
    alert("Please fill in all empty field!")
    return
  }
  
   //check repeated email or password length<8
  if(newemail.value != "" || newpassword.value != "" ){
  if (validatedata){
  for(i=0; i < validatedata.length; i++) {
    if (newemail.value == validatedata[i].email){
    console.log("repeated")//repeated email
    newemailerr.textContent = "Email repeated";
    newemail.focus();
    setTimeout(()=>{
      newemailerr.textContent = "";}, 3000);
    return
    }
    }
  }
  }

   if (newpassword.value != "" && newpassword.value.length < 8){
    newpwerr.textContent ="MIN 8 characters";
    setTimeout(()=>{newpwerr.textContent = "";newpassword.value = "";}, 2000)
    return
  }
  
    console.log("success");//success signup
    alert('Successfully Created');
    signup();
    window.location.reload();
    location.href='loginpg.html'
    return
  
  
}

  //check if confirm password same as new password
  function checkpw(){
    var newpw = document.getElementById("newpassword")
    var cpw = document.getElementById("c.password")

    var pwerr = document.getElementById("confirmpw")

    if (newpw.value != cpw.value){
      pwerr.textContent = "Please enter same password";
      setTimeout(()=>{pwerr.textContent = ""; cpw.value = ""}, 2000)
    return
    }
  }

  //validate email entered got @
  function checknewemail(){
    var email = document.getElementById("newemail") 
    var emailerr = document.getElementById("newemailalert")

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) || email.value == "")
  {
    return
  }
   emailerr.textContent = "Email format incorrect";
      setTimeout(()=>{emailerr.textContent = ""; email.value = ""}, 2000)
    return
  }


  //limit word length
  function limitnamechar(){
    var name = document.getElementById("name")
    var nameerr = document.getElementById("namealert")
    var maxchar = 20;
    var inputlength = name.value.length;

    if(inputlength == maxchar){
      nameerr.textContent="Not more than 20 characters";
      setTimeout(()=>{
        nameerr.textContent = "";}, 3000);
      }
  }

  function limitemailchar(){
    var email = document.getElementById("newemail")
    var emailerr = document.getElementById("newemailalert")
    var maxchar = 30;
    var inputlength = email.value.length;

    if(inputlength == maxchar){
      emailerr.textContent="Not more than 30 characters";
      setTimeout(()=>{
        newemailerr.textContent = "";}, 3000);
      }
  }


  //unused draft
  // loginInfo.push(newuser)
  // console.log(loginInfo)
  // rgform.submit(function(e)
  // {e.preventDefault();})



//----------------------LOGIN FORM FUNCTION------------------------//

//Store user into session storage
function usersess(){
  var user = document.getElementById("email")

 sessdata.push({
    email: user.value
  });
  sessionStorage.setItem('userdata', JSON.stringify(sessdata))

}

//compare uname and pw to LS
//include usersess() function at line 224
function signin(){
  var email = document.getElementById("email")
  var pw = document.getElementById("password")

  var form = document.getElementById("loginform")

  for(i=0;i<validatedata.length;i++){
    if (email.value == validatedata[i].email && pw.value == validatedata[i].password){
      console.log("success for info " + i);
      alert("Successfully logged in");
      form.submit();
      usersess();

      return
    }
  }
    console.log("fail");
    email.value="";
    password.value="";
    alert("Incorrect email or password");
    return
  
}


//include signin() fn at 269
function loginfn(){
  var email = document.getElementById("email")
  var pw = document.getElementById("password")

  var emailerr = document.getElementById("emailalert")
  var pwerr = document.getElementById("passalert")

  //check empty email or pw
  if (email.value == ""){
    emailerr.textContent = "Please fill in your email";
    email.focus();
    setTimeout(()=>{
      emailerr.textContent = "";}, 3000);
  }
  
  if (pw.value == ""){
    pwerr.textContent = "Please fill in your password";
    pw.focus();
    setTimeout(()=>{
      pwerr.textContent = "";}, 3000);
  }

  if(email.value == "" || password.value == ""){
    alert("please fill in all empty field")
    return
  }

  //if not empty
  if(email.value != "" || password.value != ""){
    signin();
    return
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

 //validate email entered got @
 function checkemail(){
  var email = document.getElementById("email") 
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)|| email.value =="")
{
  return (true)
}
  alert("You have entered an invalid email address!")
  return (false)
}


//TESTING FUNCTION

//check userinfo array
function showlog(){
  
for(i=0; i < validatedata.length; i++){
  console.log(validatedata[i].email)
}
  console.log(localStorage.getItem('formdata'));
  return
}



//-------------------FORGOT PASSWORD FUNCTION------------------//

function fnforgtpw(){
  var useremail = document.getElementById('userfpw')
  var fpw = document.getElementById('fpw')
  var data = JSON.parse(localStorage.getItem('formdata'))

  //check empty email
  if(useremail.value == ""){
    setTimeout(()=>{emailerr.textContent = "";}, 4000)
    alert("Please fill in your email")
    return
  }

  //disply pw
  if(useremail.value != ""){
    for(i=0; i < data.length; i++){
      if(useremail.value == data[i].email){
       console.log(data[i].password);
       fpw.value = data[i].password;
      return
      }
      }
  }

  alert("Incorrect email")
  useremail.value = "";

}

// Get the modal
var modal = document.getElementById('forgtpw');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
    }
}

function clearsess(){
  sessionStorage.clear();
  localStorage.removeItem('prdInCart')
}

function logout(){
  sessionStorage.clear();  

  localStorage.removeItem('prdInCart');

}