const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (
    name === 
    name.includes("0") ||
    name.includes("1") ||
    name.includes("2") ||
    name.includes("3") ||
    name.includes("4") ||
    name.includes("5") ||
    name.includes("6") ||
    name.includes("7") ||
    name.includes("8") ||
    name.includes("9")
  ) {
    alert("Please enter your name properly.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    alert("Password must contain both letters and numbers");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Registration successful!");
  form.reset();
});

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
