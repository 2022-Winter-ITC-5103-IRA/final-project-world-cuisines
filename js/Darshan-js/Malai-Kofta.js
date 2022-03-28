let myImagesArray = ["Darshan-Images/FinalKofta.jpg","Darshan-Images/Kofta1.jpg","Darshan-Images/Kofta2.jpg","Darshan-Images/Kofta3.jpg",
                    "Darshan-Images/Kofta4.jpg","Darshan-Images/Paste1.jpg","Darshan-Images/Paste2.jpg","Darshan-Images/Paste3.jpg"];

var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}
function Hide() {
  navList.classList.remove("_Menus-show");
}

var i = myImagesArray.length;
// function for next slide 
function nextImage(){
  if (i<myImagesArray.length) {
      i= i+1;
  }else{
      i = 1;
  }
  document.getElementById('ControlImage').src=myImagesArray[i-1];
}
// function for prew slide
function prewImage(){
  if (i<myImagesArray.length+1 && i>1) {
      i= i-1;
  }else{
      i = myImagesArray.length;
  }
  document.getElementById('ControlImage').src=myImagesArray[i-1];
}
// script for auto image slider
//setInterval(nextImage , 4000);






