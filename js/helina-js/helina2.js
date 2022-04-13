// this function will be called by clicking side button and will be redirected to the particluar division mentioned by giving id
function scrollEvent(division) {
  const element = document.getElementById(division);
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
// onclicking the hamburger menu will be shown when a responsive screen is used
function showMenu() {
  var content = document.getElementById('LeftSlider');
  if (window.getComputedStyle(content).display === 'none') {
    content.style.display = 'block';
  }
}

// onclicking the close button menu will be hidden when a responsive screen is used
function hideMenu() {
  var content = document.getElementById('LeftSlider');
  if (window.getComputedStyle(content).display === 'block') {
    content.style.display = 'none';
  }
}

// image slider
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2000);

// automatic popup
window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").style.display = "block";
    },
    2000
  )
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

// form validation
function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  // if(name.length < 5){
  //   text = "Please Enter valid Name";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    // return false;
  }
  if (email.indexOf("@") == -1) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    // return false;
  }
  // if(message.length <= 140){
  //   text = "Please Enter More Than 140 Characters";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  alert("Form Submitted Successfully!");
  return true;

}

$(document).ready(function () {

  $('#submit').change(function () {
    alert("Hello");
    // var er = $('#ErNo').val();
    // $('#weeklyEr,#MidEr').val(er);
    // $.ajax({
    //   headers: { "X-CSRFToken": token },
    //   type: "POST",
    //   url: "getData",
    //   dataType: "JSON",
    //   data: { Enrollment: er },
    //   success: function (Received) {
    //     if (Received.weekly.Status == 'ok') {
    //       $('#weeklyAP').val(Received.weekly.Wap)
    //       $('#weeklyPDC').val(Received.weekly.Wpdc)
    //       $('#weeklySE').val(Received.weekly.Wse)
    //       $('#weeklyWDD').val(Received.weekly.Wwdd)
    //     } else {
    //       $('#weeklyAP').val('')
    //       $('#weeklyPDC').val('')
    //       $('#weeklySE').val('')
    //       $('#weeklyWDD').val('')
    //     }

    //     if (Received.mid.Status == 'ok') {
    //       $('#midAP').val(Received.mid.Map)
    //       $('#midPDC').val(Received.mid.Mpdc)
    //       $('#midSE').val(Received.mid.Mse)
    //       $('#midWDD').val(Received.mid.Mwdd)
    //     } else {
    //       $('#midAP').val('')
    //       $('#midPDC').val('')
    //       $('#midSE').val('')
    //       $('#midWDD').val('')
    //     }
    //   }
    // });
  });
});
