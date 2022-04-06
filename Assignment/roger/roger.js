var container =  document.getElementById("keyboard1");
var container2 = document.getElementById("mouse1");
function change(image){
    container.src = image.src;
}

function change2(image){
    container2.src = image.src;
}

$(document).ready(function(){
    $(".like").click(function(){
        $(this).toggleClass("heart");
    })
});

var haiya = document.getElementById("audio");
var banner = document.getElementById("roger-banner");

banner.addEventListener("click", function(){
    haiya.play();
});

