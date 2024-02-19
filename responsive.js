document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Add your code to handle the form submission here, e.g., send data to a server

    alert("Feedback submitted successfully!");
    feedbackForm.reset();
  });
});
