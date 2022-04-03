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