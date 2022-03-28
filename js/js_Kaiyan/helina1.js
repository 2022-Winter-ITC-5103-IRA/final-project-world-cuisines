var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

function btnScroll(x,y){
    window.scroll(x,y);
}

// function btn2(){
//     window.scroll(0,1000);
// }

// function btn3(){
//     window.scroll(0,1500);
// }
// var prevScrollpos = window.pageYOffset;
// /* Get the header element and it's position */
// var headerDiv = document.querySelector("header");
// var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;

//   /* if scrolling down, let it scroll out of view as normal */
//   if (prevScrollpos >= currentScrollPos ){
    
//         document.querySelector(".header").style.opacity="1";
//         document.querySelector(".header").style.backgroundColor="";
//   }
//   /* otherwise if we're scrolling up, fix the nav to the top */
//   else{  
   
//       headerDiv.style.display='block';
//       headerDiv.style.top = "0";
//     //   document.querySelector(".header").style.backgroundColor = "skyblue";
//     //   document.querySelector(".navbar").style.backgroundColor = "white";
//       document.querySelector(".navbar").style.opacity="1";
//       document.querySelector(".logo").style.opacity="1";
//       document.querySelector(".header").style.opacity="1";
//     }

//   prevScrollpos = currentScrollPos;
// }