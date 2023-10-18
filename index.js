$(document).ready(function(){
  var win = window;
  var doc = document;
  var docElem = doc.documentElement;
  var body = doc.getElementsByTagName('body')[0];
  var x = win.innerWidth || docElem.clientWidth || body.clientWidth;
  var y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
  
  $(".frame__container")[0].style.height = y-106 + "px";
  $(".slider__container")[0].style.height = y-290 + "px";
  $(".slider-images__container--front")[0].style.height = y-300 + "px";

  // $(".slider-images__container--back")[0].style.top = "-" + y - 0.1 + "%";

  console.log(y)
  
});

var slideIndex = 1;
var sliderIndex = 1
showDivs(slideIndex, sliderIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  showFront(sliderIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider__img");
  if (n > x.length ) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showFront(n) {
  var i;
  var y = document.getElementsByClassName("slider__img--front");
  if (n > y.length ) {sliderIndex = 1}
  if (n < 1) {sliderIndex = y.length} ;
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  y[sliderIndex-1].style.display = "block";
}

// media query change
function WidthChange(mq) {
  if (mq <+ 390) {
    console.log("390")
  } else {
    console.log(" < 390")
  }

}