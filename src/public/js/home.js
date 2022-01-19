var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("imgslide");
    // var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
}

function autoRunslide() {
    var i;
    var slides = document.getElementsByClassName("imgslide");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(autoRunslide, 3000);
}

// dangnhap dang ky
var x=true;
var moda=document.getElementById('modal1');
function eyepass(){
    if(x){
        document.getElementById('mkdn').type='text';
        x=false;
    }else{
        document.getElementById('mkdn').type='password';
        x=true;
    }
}
 // ---------------------
function openbtn() {
  document.getElementById("modal1").style.display = "block";
}

function closebtn() {
  document.getElementById("modal1").style.display = "none";
}

window.onclick = function(event) {
if (event.target == document.getElementById("modal1")) {
  document.getElementById("modal1").style.display = "none";
  }
}