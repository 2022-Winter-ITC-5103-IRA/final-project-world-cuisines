var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true)
  {
    prompt("Enter the email");
  } 
}

function Submit() {
 window.alert("Thank you for submitting");
 reset();
}
function reset() {    
  document.getElementById("comment").value = "";
}