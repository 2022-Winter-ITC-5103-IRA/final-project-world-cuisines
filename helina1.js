var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

function HideIngredient(){
    var HideIng=document.getElementById('ingredientsCard');
    console.log(HideIng.style.display);
    if(HideIng.style.display === "none")
    {
        HideIng.style.display="block";
    }
}

function CloseButton(){
    var HideIng=document.getElementById('ingredientsCard');
    
    HideIng.style.display="none";
}

var prevScrollpos = window.pageYOffset;
/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos >= currentScrollPos ){
    
        document.querySelector(".header").style.opacity="1";
        document.querySelector(".header").style.backgroundColor="";
  }
  /* otherwise if we're scrolling up, fix the nav to the top */
  else{  
   
      headerDiv.style.display='block';
      headerDiv.style.top = "0";
    //   document.querySelector(".header").style.backgroundColor = "skyblue";
    //   document.querySelector(".navbar").style.backgroundColor = "white";
      document.querySelector(".navbar").style.opacity="1";
      document.querySelector(".logo").style.opacity="1";
      document.querySelector(".header").style.opacity="1";
    }

  prevScrollpos = currentScrollPos;
}