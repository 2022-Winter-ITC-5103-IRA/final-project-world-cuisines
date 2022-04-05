const form = document.getElementById('contactForm');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('message');

//checking validation
form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});
//Check for each input field error and success
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
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
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const msgValue = msg.value.trim();
  var loop=true,letters = /^[A-Za-z]+$/,validnum=/^\d{10}$/;

  //check firstname
  if(fnameValue === '') {
      setError(fname, '[Firstname is required]');
      loop=false;
  } else if(fnameValue.match(letters) && fnameValue.length>2)
  {
    setSuccess(fname);
  }
  else {
    setError(fname, '[Only Aplhabets Allowed]');
  }
  //check lastname
  if(lnameValue === '') {
    setError(lname, '[Lastname is required]');
    loop=false;
  }else if(lnameValue.match(letters) && lnameValue.length>2)
  {
    setSuccess(fname);
  }
  else {
    setSuccess(lname);
  }
  //check email using RE.
  if(emailValue === '') {
    setError(email, '[Email is required]');
    loop=false;
  } 
  else if (!isValidEmail(emailValue)) {
    setError(email, '[Provide a valid email address]');
    loop=false;
  } 
  else {
    setSuccess(email);
  }
  //check phone length must be 10.
  if(phoneValue === '') {
    setError(phone, '[ContactNumber is required]');
    loop=false;
  } 
  else if (phoneValue.length==10 && phoneValue.match(validnum)) {    
    setSuccess(phone);
  }  
  else {
    setError(phone, '[Length 10 digits and Number Only.]');
    loop=false;
  }

  if(msgValue === '') {
    setError(msg, '[Message cannot be empty]');
    loop=false;
  } 
  else if (msgValue.length>40) {    
    setSuccess(msg);
  }  
  else {
    setError(msg,'[Minimum 40 character]');
    loop=false;
  }
  if(loop===true){
    setTimeout(() => { alert('Message Recorded!!!') },10)
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



