const modaltoogler = document.querySelectorAll(".modal-toggler");
const overlay = document.querySelector(".overlay");
const closemodalIcon = document.querySelector(".closeIcon-box");

modaltoogler.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
  });
});

closemodalIcon.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

var currentUrl = window.location.href;

// Read the "fbc" and "fbp" cookies
var fbcCookie = getCookie("fbc");
var fbpCookie = getCookie("fbp");

// Check if the query string ?adset_id=1&campaign_id=2 already exists
if (currentUrl.indexOf("?adset_id=1&campaign_id=2") === -1) {
  // Build the final URL with the query string and cookie values
  var finalUrl =
    currentUrl +
    "?adset_id=1&campaign_id=2&fbc=" +
    fbcCookie +
    "&fbp=" +
    fbpCookie;

  // Update the URL with the final URL
  window.history.replaceState({}, document.title, finalUrl);
}

// Function to get the value of a cookie by name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}
