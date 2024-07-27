
function validateName() {
    const name = document.getElementById('contact-name').value;
    const error = document.getElementById('name-error');
    if (name.trim() === '') {
      error.textContent = '*Name is required';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  function validatePhone() {
    const phone = document.getElementById('contact-phone').value;
    const error = document.getElementById('phone-error');
    if (phone.trim() === '') {
      error.textContent = '*Phone number is required';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  function validateEmail() {
    const email = document.getElementById('contact-email').value;
    const error = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      error.textContent = '*Email is required';
      return false;
    } else if (!emailRegex.test(email)) {
      error.textContent = ' *Invalid email format';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  function validateMessage() {
    const message = document.getElementById('contact-message').value;
    const error = document.getElementById('message-error');
    if (message.trim() === '') {
      error.textContent = '*Message is required';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  function validateForm() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
      alert('Form submitted successfully!');
      return true;
    } else {
      return false;
    }
  }