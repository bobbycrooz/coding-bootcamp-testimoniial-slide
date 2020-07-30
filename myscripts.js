var img = document.getElementById("tanya")
var card2 = document.getElementsByClassName("card2")
var card3 = document.getElementsByClassName("card3")


function prev(){
    img.src = "images/image-tanya.jpg";
    card2[0].style.visibility = "visible";
    card3[0].style.visibility = "hidden";

    

}

function next(){
    img.src = "images/image-john.jpg";
    card2[0].style.visibility = "hidden";
    card3[0].style.visibility = "visible";
}
