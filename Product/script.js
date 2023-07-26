document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch username and password from form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login logic (e.g., send request to backend)
  // You can customize this code based on your backend implementation

  // Example login logic (check for "admin" username and password "password123")
  if (username === "admin" && password === "password123") {
    // Save username and password to localStorage
    localStorage.setItem("user", username);
    localStorage.setItem("password", password);

    alert("Login successful!");
    // Redirect to another page
    window.location.href = "product.html";
  } else {
    alert("Login failed. Please try again.");
  }
});
