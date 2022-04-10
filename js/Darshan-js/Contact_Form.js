const form = document.getElementById('contactForm');  //access form
//accessing each field in form using variables
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('message');

//checking validation
form.addEventListener('submit', e => {
  e.preventDefault(); // prevent the form from submitting automatically
  validateInputs(); //validate the inputs and we can submit the form after every check succeed 
});
//two functions set the error or success states of the each of the input controls
const setError = (element, message) => {
  const inputControl = element.parentElement; //getting parentelement
  const errorDisplay = inputControl.querySelector('.error'); 

  errorDisplay.innerText = message; //display error in div container
  inputControl.classList.add('error'); //add on error
  inputControl.classList.remove('success'); //remove on success
}
/*Opposite function of setError */
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = ''; //display nothing once success
  inputControl.classList.add('success'); 
  inputControl.classList.remove('error');
}

//Email Regular Expression Function
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//validation function
const validateInputs = () => {
  const fnameValue = fname.value.trim(); //trim remove whitespace
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const msgValue = msg.value.trim();
  var loop=true,letters = /^[A-Za-z]+$/,validnum=/^\d{10}$/; //regex for fname,lname and ContactNUmber

  //check firstname
  if(fnameValue === '') {
      setError(fname, '[Firstname is required]'); //if null then display error message
      loop=false;
  } else if(fname.value.match(letters) && fnameValue.length>2)
  {
    setSuccess(fname);
  }
  else {
    setError(fname, '[Only Aplhabets Allowed]'); //if number present then display error message as only alphabet
  }
  //check lastname
  if(lnameValue === '') {
    setError(lname, '[Lastname is required]'); //if null then display error message
    loop=false;
  }else if(lname.value.match(letters) && lnameValue.length>4)
  {
    setSuccess(lname);
  }
  else {
    setError(lname, '[Only Aplhabets Allowed]'); //if number present then display error message as only alphabet
  }
  //check email using RE.
  if(emailValue === '') {      //if null then display error message
    setError(email, '[Email is required]');
    loop=false;
  } 
  else if (!isValidEmail(emailValue)) {  //if email does not match regex display error message
    setError(email, '[Provide a valid email address]');
    loop=false;
  } 
  else {
    setSuccess(email);
  }
  //check phone length must be 10.
  if(phoneValue === '') {           //if null then display error message
    setError(phone, '[ContactNumber is required]');
    loop=false;
  } 
  else if (phoneValue.length==10 && phoneValue.match(validnum)) {  //number should be 10 digits and no aplhaber allowed 
    setSuccess(phone);
  }  
  else {   //number!=10 and aphabet present then display error message
    setError(phone, '[Length 10 digits and Number Only.]');
    loop=false;
  }
  //check message is not null and having minimum 40 characters.
  if(msgValue === '') {           //if null then display error message
    setError(msg, '[Message cannot be empty]');
    loop=false;
  } 
  else if (msgValue.length>40) {     //Need more than 40 character
    setSuccess(msg);
  }  
  else {   //display error message if not more than 40 character
    setError(msg,'[Minimum 40 character]');
    loop=false;
  }
  //all success then clear form after showing pop-up
  if(loop===true){ 
    setTimeout(() => { alert('Message Recorded!!!') },10) //display pop-up
    //clear all fields filed-up
    fname.value="";  
    lname.value="";
    email.value="";
    phone.value="";
    msg.value="";
  }
};

//Reponsive Navigation
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");  //Show Menu on click
}
function Hide() {
  navList.classList.remove("_Menus-show");  //Hide Menu on click
}



/*
Example of valid email id
mysite@ourearth.com
my.ownsite@ourearth.org
mysite@you.me.net

Example of invalid email id
mysite.ourearth.com [@ is not present]
mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
@you.me.net [ No character before @ ]
mysite123@gmail.b [ ".b" is not a valid tld ]
mysite@.org.org [ tld can not start with dot "." ]
.mysite@mysite.org [ an email should not be start with "." ]
mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
mysite..1234@yahoo.com [double dots are not allowed]
 */