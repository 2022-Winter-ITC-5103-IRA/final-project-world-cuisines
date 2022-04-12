// automatic slide
let myImagesArray = ["images/images_Kaiyan/breakfast-burrito.jpg","images/images_Kaiyan/breakfast-burrito2.jpg","images/images_Kaiyan/breakfast-burrito3.jpg"];

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
		
		document.getElementById('slideshow').src = myImagesArray[ImageNumber];

       

    }


// the event handler for the click event
// const toggle = (evt) => {
// 	console.log(evt);
// 	const h2Element = evt.currentTarget; 
// 	const divElement = h2Element.nextElementSibling; 

// 	h2Element.classList.toggle('minus');
// 	divElement.classList.toggle('open');

// 	evt.preventDefault(); 
// };

// document.addEventListener('DOMContentLoaded', () => {
	
// 	const h2Elements = step.querySelectorAll('#step h2');
	
// 	for (let h2Element of h2Elements) {
// 	h2Element.addEventListener('click', toggle);
// 	}
	
// 	h2Elements[0].firstChild.focus();
// });