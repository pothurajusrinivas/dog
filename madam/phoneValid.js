function phonenumberValidate() {
  const Phonenumber = document.getElementById('Phonenumber').value;
  const phonenumberId = document.getElementById('PhonenumberId');

  if (Phonenumber.length == 0) {
      phonenumberId.textContent = "enter phone number";
      phonenumberId.style.color = "red";
  } else if (Phonenumber.length == 8) {
      phonenumberId.textContent = "valid land phone number";
      phonenumberId.style.color = "green";
  } else if (Phonenumber.length == 10) {
      phonenumberId.textContent = "valid mobile phone number";
      phonenumberId.style.color = "green";
  } else {
      phonenumberId.textContent = "invalid phone number";
      phonenumberId.style.color = "red";
  }
}