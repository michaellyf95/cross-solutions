// NAVIGATIONS
const homebtn = document.getElementById('logobtn');
homebtn.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));

// ANCHOR SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// EMAIL INPUT HANDLE
var emailInput = document.getElementById('email-input');
var sendBtn = document.getElementById('send-btn');
var popup = document.querySelector('.popup-wrapper')
var popuptxt = document.querySelector('.popup-txt')
var popupimg = document.querySelector('.popup-img')

emailInput.addEventListener('keypress', function(event) {
  if (event.key == 'Enter') {
    event.preventDefault();
    sendBtn.click();
  }
});

function sendEmail() {
    var result = ValidateEmail(emailInput.value.trim());
    popupTransition(result);
}

function popupTransition(val) {
  popup.classList.add('active');

  if (val == false) {
    popuptxt.classList.add('error-txt');
    popuptxt.classList.remove('success-txt');
    popupimg.classList.add('error-img');
    popupimg.classList.remove('success-img');
    popuptxt.innerHTML = 'Please enter a valid email address.'
  }
  else {
    popuptxt.classList.add('success-txt');
    popuptxt.classList.remove('error-txt');
    popupimg.classList.add('success-img');
    popupimg.classList.remove('error-img');
    popuptxt.innerHTML = 'Sent! We will get back to you shortly, thank you!'
  }

  setTimeout(function() {
    popup.classList.remove('active');
  },2000);
}

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
    return (false)
}