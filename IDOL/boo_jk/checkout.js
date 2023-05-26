let userdetails = JSON.parse(sessionStorage.getItem('userdata'));
let validateEmail = JSON.parse(localStorage.getItem('formdata'));

function getEmail(){
    
    //console.log(usermail[0].email)

    for(let i=0;i < validateEmail.length;i++){
         if (userdetails[0].email == validateEmail[i].email){
            console.log(validateEmail[i].password, )
             
            document.getElementById("email").value = validateEmail[i].email;
            document.getElementById("address").value = validateEmail[i].address;
            document.getElementById("code").value = validateEmail[i].zip;
            document.getElementById("city").value = validateEmail[i].country;
            document.getElementById("state").value = validateEmail[i].state;
            
         }
        
     }

}

function checkoutfn(){
    var name = document.getElementById("name")
    var card = document.getElementById("card")
    var date = document.getElementById("date")
    var cvc = document.getElementById("cvc")
    var email = document.getElementById("email")
    var code = document.getElementById("code")
    var city = document.getElementById("city")
    var state = document.getElementById("state")
    
    var nameerr = document.getElementById("namealert")
    var carderr = document.getElementById("numberalert")
    var dateerr = document.getElementById("datealert")
    var cvcerr = document.getElementById("cvcalert")
    var emailerr = document.getElementById("emailalert")
    var codeerr = document.getElementById("codealert")
    var cityerr = document.getElementById("cityalert")
    var stateerr = document.getElementById("statealert")

    if (name.value == ""){
        nameerr.textContent = "Empty Name";
        name.focus();
        setTimeout(() => {
            nameerr.textContent ="";}, 3000);
    }

    if (card.value == ""){
        carderr.textContent = "Empty Card Number";
        card.focus();
        setTimeout(() => {
            carderr.textContent ="";}, 3000);
    }

    if (date.value == ""){
        dateerr.textContent = "Empty Date";
        date.focus();
        setTimeout(() => {
            dateerr.textContent ="";}, 3000);
    }

    if (cvc.value == ""){
        cvcerr.textContent = "Empty CVC";
        cvc.focus();
        setTimeout(() => {
            cvcerr.textContent ="";}, 3000);
    }

    if (email.value == ""){
        emailerr.textContent = "Empty Email";
        email.focus();
        setTimeout(() => {
            emailerr.textContent ="";}, 3000);
    }

    if (code.value == ""){
        codeerr.textContent = "Empty Zip Code";
        code.focus();
        setTimeout(() => {
            codeerr.textContent ="";}, 3000);
    }

    if (city.value == ""){
        cityerr.textContent = "Empty City";
        city.focus();
        setTimeout(() => {
            cityerr.textContent ="";}, 3000);
    }

    if (state.value == ""){
        stateerr.textContent = "Empty State";
        state.focus();
        setTimeout(() => {
            stateerr.textContent ="";}, 3000);
    }

    checknewemail();

    if (name.value == "" || card.value == "" || date.value == "" || cvc.value == "" || email.value == "" || code.value=="" || city.value=="" || state.value=="" ){
        alert("Please fill in all empty field!")
        return
    }

    if (card.value.length != 16 ){
        alert("Please enter the valid card number")
        carderr.textContent = "Enter 16 digit number !";
        card.focus();
        setTimeout(() => {
            carderr.textContent ="";}, 5000);
        return
    }

    if (date.value.length != 5 ){
        alert("Please enter the valid date number")
        dateerr.textContent = "Enter 4 digit number !";
        date.focus();
        setTimeout(() => {
            dateerr.textContent ="";}, 5000);
        return
    }

    if (cvc.value.length != 3 ){
        alert("Please enter the valid CVC number")
        cvcerr.textContent = "Enter 3 digit number !";
        cvc.focus();
        setTimeout(() => {
            cvcerr.textContent ="";}, 5000);
        return
    }
    alert("Thanks for purchase!");
    localStorage.removeItem('prdInCart');
    window.location.href = '../enoch/loginpg.html';
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

