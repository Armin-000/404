document.addEventListener("DOMContentLoaded", function () {
  var backButton = document.getElementById("btn-back");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.history.back();
    });
  }
});
