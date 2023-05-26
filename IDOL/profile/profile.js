// for validate purpose (to check if email in session storage match local storage)
let usermail = JSON.parse(sessionStorage.getItem('userdata'));
let validateLocal = JSON.parse(localStorage.getItem('formdata'))


let validate_cont= JSON.parse(localStorage.getItem('setcont'));

var getcont;
function fnget(){
    // getcont = validatecont[0].cont;
    
    for(i=0;i<validateLocal.length;i++){
        var total = "";
        if (usermail[0].email == validateLocal[i].email){
            //  console.log(validateLocal[i].password, )

            document.getElementById("uname").innerHTML = validateLocal[i].name;
            document.getElementById("uname2").innerHTML = validateLocal[i].name;
            document.getElementById("uname3").innerHTML = validateLocal[i].name;
            document.getElementById("uemail").innerHTML = validateLocal[i].email;
            for (let j=0;j<validateLocal[i].password.length;j++){
                total+="*";
            }
            document.getElementById("upass").innerHTML = total;
            document.getElementById("udob").innerHTML = validateLocal[i].dob;
            document.getElementById("uaddress").innerHTML = validateLocal[i].address;
            document.getElementById("upostal").innerHTML = validateLocal[i].zip;
            document.getElementById("ustate").innerHTML = validateLocal[i].state;
            document.getElementById("ucountry").innerHTML = validateLocal[i].country;
        }
        
    }

    
}


// ----------------------------- popup form js ---------------------------------//
function popup(){
    var main_btn = document.querySelector(".main_btn");
    var wrapper = document.querySelector(".wrapper");
    var close_btn = document.querySelectorAll(".close_btn");

    //  change the class = "wrapper" to class = "wrapper active" in html
    // popup form appear
    main_btn.addEventListener("click", function () {
    wrapper.classList.add("active");
    });

    // change the class = "wrapper active" to class = "wrapper" in html
    // exit from popup form
    // "btn" allows user to press "cancel"/"crossimg"/ any place outside the popup form to exit
    close_btn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            wrapper.classList.remove("active");
    });
    });

}

// ----------------------------- update address ---------------------------------//

function updateAddress(){

    var upAddress = document.getElementById("updated_add").value
    var upZip = document.getElementById("updated_zip").value
    var upState = document.getElementById("updated_state").value
    var upCountry = document.getElementById("updated_country").value

    
   
    var j=0;
    var latest;

    for(i=0;i<validateLocal.length;i++){
        if (usermail[0].email == validateLocal[i].email){
            latest = validateLocal;
            j = i;
        }
        
    }

    var upEmail = validateLocal[j].email
    var upPassword = validateLocal[j].password
    var upName = validateLocal[j].name
    var upDob = validateLocal[j].dob


    validateLocal = validateLocal.splice(j,1);
    localStorage.setItem('formdata', JSON.stringify(latest))

    latest.push({
        email: upEmail,
        password: upPassword,
        name: upName,
        address: upAddress,
        zip: upZip,
        state: upState,
        country:upCountry,
        dob: upDob
    });
    localStorage.setItem('formdata', JSON.stringify(latest))
}

//-------------------- Logout --------------------//


    
