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

var profilePicture = document.querySelector(".pewdiepie");
var awardBox = document.querySelector(".awardBox");
//When hover the picture, the box will pop out
profilePicture.addEventListener("mouseover",function() {
    profilePicture.style.cursor = "pointer";
    awardBox.style.display = "flex";
    awardBox.style.opacity = "1";
    awardBox.style.tansition = "opacity 1s linear";
})
//When hover out the picture, the box will hide
profilePicture.addEventListener("mouseout",function() {
    profilePicture.style.cursor = "default";
    awardBox.style.display = "none";
})

