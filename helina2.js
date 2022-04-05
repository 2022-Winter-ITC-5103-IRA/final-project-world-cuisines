// onclicking the hamburger menu will be shown when a responsive screen is used
function showMenu(){
  var content= document.getElementById('LeftSlider');
  if(window.getComputedStyle(content).display === 'none'){
      content.style.display = 'block';   
  }
}

// onclicking the close button menu will be hidden when a responsive screen is used
function hideMenu(){
  var content= document.getElementById('LeftSlider');
  if(window.getComputedStyle(content).display === 'block'){
      content.style.display = 'none';   
  }
}

// image slider
var counter=1;
setInterval(function(){
  document.getElementById('radio' + counter).checked=true;
  counter++;
  if(counter>4){
    counter=1;
  }
}, 2000);

// automatic popup
window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      2000 
  )
});
document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

//Dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// form validation
function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}