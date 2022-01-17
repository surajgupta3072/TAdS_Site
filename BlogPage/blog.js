

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//=================================================

function readMore(Id) {
  slideshow = document.getElementById("slideshow");
  blog = document.getElementById(Id);
  blog.style = "display:block";
  slideshow.style = "display:none";
  document.title = document.getElementsByClassName('blog-desc-head')[parseInt(Id)-1].innerHTML;
}

function exitBlog(Id){
  slideshow = document.getElementById("slideshow");
  blog = document.getElementById(Id);
  slideshow.style = "display:block";
  blog.style="display:none";
  document.title="Technology Adventure Society";
}