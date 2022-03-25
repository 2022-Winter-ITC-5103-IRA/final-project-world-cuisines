let myImagesArray = ["images_Kaiyan/breakfast-burrito.jpg","images_Kaiyan/breakfast-burrito2.jpg","images_Kaiyan/breakfast-burrito3.jpg"];

let ImageNumber = 0;
let difference = myImagesArray.length -1;

let delay = 2000;

setInterval('ChangeImages(1)', delay);

function ChangeImages(direction)
    {
        
		ImageNumber = ImageNumber + direction;

		if(ImageNumber > difference)
		{
			ImageNumber = 0;
		}

		if(ImageNumber < 0)
		{
			ImageNumber = difference;
		}
		//document.slideshow.src = myImagesArray[ImageNumber];
		document.getElementById('slideshow').src = myImagesArray[ImageNumber];

       

    }