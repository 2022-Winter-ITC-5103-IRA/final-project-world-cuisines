// This is the function to show the list in hamburger at the time of responsive
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

// this function also helps in responsive design
function Hide() {
  navList.classList.remove("_Menus-show");
}

function validateEmail(x, email)
{
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(email.value.match(mailformat))
  {
    window.alert("Thank you for submitting");
    myFunction(x);
  document.form1.text1.focus();
  return true;
  }
  else
  {
  alert("Invalid email address.");
  document.form1.text1.focus();
  return false;
  }
 
} 

// this function helps in asking the user to input their email if they click on the check box
function myFunction(x) {
  
  email.remove();
  x.style.display = 'none';
  

}

// this function is used to clear the text area when submit button will be clicked
function Submit() {
  window.alert("Thank you for submitting");
  reset();
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//This is the clearing function
function reset() {
  document.getElementById("comment").value = "";
}

var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "100px";
    }
  });
}


function RTxt() {
  var rTxt = document.getElementById("reviewtxt");
  var rDiv = document.querySelector('.star-widget');
  rTxt.style.display="block";
  rDiv.style.display="none";
  
  return false;
}