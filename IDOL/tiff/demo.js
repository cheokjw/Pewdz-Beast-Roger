var container = document.getElementById("beast");
var container2 = document.getElementById("beast_logo");
var logo = document.getElementById("roger");
var logo2 = document.getElementById("roger_logo");
var pewdz = document.getElementById("pewdz");
var pewdz2 = document.getElementById("pewdz_logo");


container.addEventListener("mouseover", function(){
    container2.style.opacity="0";
    container2.style.transition = "opacity 0.3s ease";
})

container.addEventListener("mouseout", function(){
    container2.style.opacity="1";
    container2.style.transition = "opacity 1.5s ease";
})

logo.addEventListener("mouseover", function(){
    logo2.style.opacity="0";
    logo2.style.transition = "opacity 0.3s ease";
})

logo.addEventListener("mouseout", function(){
    logo2.style.opacity="1";
    logo2.style.transition = "opacity 1.5s ease";
})

pewdz.addEventListener("mouseover", function(){
    pewdz2.style.opacity="0";
    pewdz2.style.transition = "opacity 0.3s ease";
})

pewdz.addEventListener("mouseout", function(){
    pewdz2.style.opacity="1";
    pewdz2.style.transition = "opacity 1.5s ease";
})

