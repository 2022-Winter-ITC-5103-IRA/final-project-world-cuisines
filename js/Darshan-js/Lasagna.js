// Responsive Navigation Hamburgur Menu with show and hide function
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");  //Show Menu on click
}
function Hide() {
  navList.classList.remove("_Menus-show");  //Hide Menu on click
}

document.getElementById('CalorieMeter').addEventListener('submit', function(e){
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateCalories, 2000);
  e.preventDefault();
});

function calculateCalories(e) {
  
  const age = document.getElementById('age');
  const gender = document.querySelector('input[name="Gender"]:checked');
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  const activity = document.getElementById('list').value;
  const totalCalories = document.getElementById('total-calories');
  
  if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
    errorMessage('Please make sure the values you entered are correct')
  }else if(gender.id === 'Male' && activity === "1") {
    totalCalories.value = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + 
                          (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  }else if(gender.id === 'Male' && activity === "2") {
    totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + 
                          (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  }else if (gender.id === 'Male' && activity === "3") {
    totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + 
                          (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  }else if(gender.id === 'Male' && activity === "4") {
    totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + 
                          (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  }else if(gender.id === 'Male' && activity === "5") {
    totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + 
                          (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  }else if(gender.id === 'Female' && activity === "1") {
    totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + 
                          (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  }else if(gender.id === 'Female' && activity === "2") {
    totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + 
                          (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  }else if(gender.id === 'Female' && activity === "3") {
    totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + 
                          (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  }else if(gender.id === 'Female' && activity === "4") {
    totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + 
                          (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  }else{
    totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + 
                          (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } 
  document.getElementById('results').style.display = 'block';
  document.getElementById('loading').style.display = 'none'; 
}

function errorMessage(error) {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 4000);
}
function clearError() {
  document.querySelector('.alert').remove();
}
