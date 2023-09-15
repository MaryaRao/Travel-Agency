document.addEventListener('DOMContentLoaded', function () {
  // Show "Check Out" and "Destination" inputs on page load
  document.getElementById('destinationInput').style.display = 'block';
  document.getElementById('checkOutInput').style.display = 'block';
  document.getElementById('exchange').style.display = 'block';


  // Handle radio button changes
  var radioOptions = document.getElementsByName('inlineRadioOptions');
  for (var i = 0; i < radioOptions.length; i++) {
    radioOptions[i].addEventListener('change', function () {
      var oneWayRadioChecked = document.getElementById('oneWay').checked;

      // Show/hide "Check Out" input based on radio button selection
      if (oneWayRadioChecked) {
        document.getElementById('checkOutInput').style.visibility = 'hidden';
        document.getElementById('destinationInput').style.visibility = 'hidden';
        document.getElementById('exchange').style.visibility = 'hidden';

      } else {
        document.getElementById('checkOutInput').style.visibility = 'visible';
        document.getElementById('destinationInput').style.visibility = 'visible';
        document.getElementById('exchange').style.visibility = 'visible';
      }
    });
  }
});


// DESTINATIONS


 
// ----- <> ----- //

// POPULAR PLACES
  // Dubai Modal Functions
  var slideIndexDubai = 1;
  var modalDubai = document.getElementById('modal01');

  function openModalDubai(startIndex) {
    slideIndexDubai = startIndex;
    showDivsDubai(slideIndexDubai);
    modalDubai.style.display = "block";
  }

  function closeModalDubai() {
    modalDubai.style.display = "none";
  }

  function plusDivsDubai(n) {
    showDivsDubai(slideIndexDubai += n); // Fixed function name here
  }

  function showDivsDubai(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndexDubai = 1; }
    if (n < 1) { slideIndexDubai = x.length; }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndexDubai - 1].style.display = "block";
  }

// BANGKOK
var slideIndexBangkok = 1;
var modalBangkok = document.getElementById('modal02');

function openModalBangkok(startIndex) {
  slideIndexBangkok = startIndex;
  showDivsBangkok(slideIndexBangkok);
  modalBangkok.style.display = "block";
}

function closeModalBangkok() {
  modalBangkok.style.display = "none";
}

function plusDivsBangkok(n) {
  showDivsBangkok(slideIndexBangkok += n);
}

function showDivsBangkok(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) { slideIndexBangkok = 1; }
  if (n < 1) { slideIndexBangkok = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexBangkok - 1].style.display = "block";
}

// TOKYO
var slideIndexTokyo = 1;
var modalTokyo = document.getElementById('modal03');

function openModalTokyo(startIndex) {
  slideIndexTokyo = startIndex;
  showDivsTokyo(slideIndexTokyo);
  modalTokyo.style.display = "block";
}

function closeModalTokyo() {
  modalTokyo.style.display = "none";
}

function plusDivsTokyo(n) {
  showDivsTokyo(slideIndexTokyo += n);
}

function showDivsTokyo(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) { slideIndexTokyo = 1; }
  if (n < 1) { slideIndexTokyo = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexTokyo - 1].style.display = "block";
}
// PARIS
var slideIndexParis = 1;
var modalParis = document.getElementById('modal04');

function openModalParis(startIndex) {
  slideIndexParis = startIndex;
  showDivsParis(slideIndexParis);
  modalParis.style.display = "block";
}

function closeModalParis() {
  modalParis.style.display = "none";
}

function plusDivsParis(n) {
  showDivsParis(slideIndexParis += n);
}

function showDivsParis(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) { slideIndexParis = 1; }
  if (n < 1) { slideIndexParis = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexParis - 1].style.display = "block";
}
// PARIS
var slideIndexParis = 1;
var modalParis = document.getElementById('modal04');

function openModalParis(startIndex) {
  slideIndexParis = startIndex;
  showDivsParis(slideIndexParis);
  modalParis.style.display = "block";
}

function closeModalParis() {
  modalParis.style.display = "none";
}

function plusDivsParis(n) {
  showDivsParis(slideIndexParis += n);
}

function showDivsParis(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) { slideIndexParis = 1; }
  if (n < 1) { slideIndexParis = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexParis - 1].style.display = "block";
}
// Azerbaijan
var slideIndexAzerbaijan = 1;
var modalAzerbaijan = document.getElementById('modal05');

function openModalAzerbaijan(startIndex) {
  slideIndexAzerbaijan = startIndex;
  showDivsAzerbaijan(slideIndexParis);
  modalAzerbaijan.style.display = "block";
}

function closeModalAzerbaijan() {
  modalAzerbaijan.style.display = "none";
}

function plusDivsAzerbaijan(n) {
  showDivsAzerbaijan(slideIndexAzerbaijan += n);
}

function showDivsAzerbaijan(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) { slideIndexAzerbaijan = 1; }
  if (n < 1) { slideIndexAzerbaijan = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexAzerbaijan - 1].style.display = "block";
}
// FLIGHT TAB BAR
function openTab(evt, tabName) {
  var i, tabContent;

  // Hide all tab content
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";
}

// Loader ---->
var scrollY = window.scrollY;
window.onscroll = function() {
  window.scrollTo(0, scrollY);
};
setTimeout(function() {
  window.onscroll = null;
}, 2000);
window.addEventListener('load', function () {
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    document.body.style.overflow = 'auto';
}, 2000);
});