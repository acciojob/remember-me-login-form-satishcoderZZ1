//your JS code here. If required.
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      existingButton.style.display = "inline-block";
    }
document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault(); // prevent form reload

      const username = usernameInput.value.trim();
      const password = passwordInput.value;

      if (!username || !password) {
        alert("Please enter both username and password.");
        return;
      }

      alert(`Logged in as ${username}`);

	if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingButton.style.display = "inline-block";
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingButton.style.display = "none";
      }
    });
existingButton.addEventListener("click", function () {
      const savedUser = localStorage.getItem("username");
      if (savedUser) {
        alert(`Logged in as ${savedUser}`);
      }
    });