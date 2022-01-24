const form = document.querySelector("form"),
  input = document.querySelector("input"),
  inputError = document.getElementById("form-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value.trim()) {
    return;
  }

  const emailIsValid = validateEmail(input.value);

  if (!emailIsValid) {
    return (inputError.style.display = "block");
  }

  inputError.style.display = "none";
  form.reset();
  return showToast();
});

const showToast = () => {
  const toast = document.getElementById("snackbar");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
};

const validateEmail = (email) => {
  const result =
    /^[-a-z0-9~!$%^&*_=+}{?]+(\.[-a-z0-9~!$%^&*_=+}{?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

  return result.test(email);
};
