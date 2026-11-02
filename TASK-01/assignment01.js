const Username = "admin";
const Password = "12345";

let retry = true;

while (retry) {
  const username = prompt("Enter your username:");
  const password = prompt("Enter your password:");

  if (username === Username && password === Password) {
    alert("Login successful! Welcome, " + username);
  } else {
    retry = confirm("Invalid username or password. Do you want to try again?");
  }
}

alert("Thank you!");
