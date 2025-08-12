// Show welcome alert when page loads
function welcomeMessage() {
  alert("Welcome to Cozy Corner Shop! Happy shopping 🛒");
}

// Change section color/text on click
function changeOffer() {
  let section = document.getElementById("special-offer");
  section.style.backgroundColor = "#ff6f61"; // new color
  section.querySelector("h2").textContent = "Offer Updated!";
  section.querySelector("p").textContent = "Now get 20% off for the next 24 hours!";
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("address").value.trim();

  if (name === "" || email === "" || address === "") {
    alert("Please fill out all fields before placing your order.");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Order placed successfully! 🎉");
  return true;
}
