function interviewval(){
    var email = document.getElementById("email")
    var fName = document.getElementById("fName")
    var lName = document.getElementById("lName")
    var country = document.getElementById("country")
    var celebrity = document.getElementById("celebrity")

    var emailerr = document.getElementById("emailalert")
    var fNameerr = document.getElementById("fNamealert")
    var lNameerr = document.getElementById("lNamealert")
    var countryerr = document.getElementById("countryalert")
    var celebrityerr = document.getElementById("celebrityalert")
  
    if (email.value == ""){
        emailerr.textContent = "*Empty Email";
        email.focus();
        setTimeout(()=>{
          emailerr.textContent = "";}, 3000);
      }
      
    if (fName.value == ""){
        fNameerr.textContent = "*Empty First Name";
        fName.focus();
        setTimeout(()=>{
          fNameerr.textContent = "";}, 3000);
      }
      
    if (lName.value == ""){
        lNameerr.textContent = "*Empty Last Name";
        lName.focus();
        setTimeout(()=>{
          lNameerr.textContent = "";}, 3000);
      }
    
    if (country.value == "Please Select"){
        countryerr.textContent = "*Empty Choice";
        country.focus();
        setTimeout(()=>{
          countryerr.textContent = "";}, 3000);
      }
    
    if (celebrity.value == "Please Select"){
        celebrityerr.textContent = "*Empty Choice";
        celebrity.focus();
        setTimeout(()=>{
            celebrityerr.textContent = "";}, 3000);
      }
    
    if (email.value == "" || fName.value == "" || lName.value == "" || country.value == "" || celebrity.value == "" ){
        alert("Please fill in all empty field!")
        return
      }
      console.log("testing");
      window.location.href = '../tiff/index.html';
    
}


function checknewemail(){
    var newemail = document.getElementById("email") 
    var newemailerr = document.getElementById("emailalert")

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newemail.value))
  {
    return
  }
   newemailerr.textContent = "*This email is invalid";
      setTimeout(()=>{newemailerr.textContent = ""; newemail.value = ""}, 3000)
    return
}
  
function checkemail(){
    var email = document.getElementById("email") 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}