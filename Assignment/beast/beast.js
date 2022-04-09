var container =  document.getElementById("product1");
var container2 = document.getElementById("product2");
function change(image){
    container.src = image.src;
}

function change2(image){
    container2.src = image.src;
}


var haiya = document.getElementById("audio");
var banner = document.getElementById("roger-banner");

banner.addEventListener("click", function(){
    haiya.play();
});

