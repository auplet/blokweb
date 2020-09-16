// JavaScript Document
/*
function meerWeergeven() {
    var dots = document.getElementById("dots");
    var showMore = document.getElementById("more");
    var buttonTxt = document.getElementById("buttonMore")

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        buttonTxt.innerHTML = "Meer weergeven";
        showMore.style.display = "none";
    } else {
        dots.style.display = "none";
        buttonTxt.innerHTML = "Minder weergeven";
        showMore.style.display = "inline";
    }
}
*/



var meerWeergevenButton = document.querySelector("section:first-child button");
meerWeergevenButton.addEventListener("click", veranderMeerWeergevenUL);

function veranderMeerWeergevenUL() {
    let meerWeergevenUL = document.querySelector("section:first-child ul");
    meerWeergevenUL.classList.toggle("anders");
}
