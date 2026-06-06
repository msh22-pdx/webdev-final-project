document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.querySelector(".submit-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent the default form submission (which would reload the page)
      event.preventDefault();

      // Grab the user's input values
      const nameInput = document.getElementById("name").value.trim();
      const emailInput = document.getElementById("email").value.trim();
      const messageInput = document.getElementById("message").value.trim();

      // Double-check validation
      if (!nameInput || !emailInput || !messageInput) {
        return;
      }

      // 1. UI Loading State: Change button text and disable it so they can't double-click
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
      submitBtn.style.cursor = "wait";

      // 2. Simulate an API call with a 1.5-second delay
      setTimeout(() => {
        // Restore button state
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.cursor = "pointer";

        // 3. Dynamically create a semantic success message element
        const successMessage = document.createElement("div");
        successMessage.classList.add("form-response-msg");
        successMessage.setAttribute("role", "alert"); // Important for accessibility screen readers
        successMessage.innerHTML = `<p><strong>Success!</strong> Thank you, ${nameInput}. Your message has been sent.</p>`;

        // Insert the message directly above the form
        contactForm.parentNode.insertBefore(successMessage, contactForm);

        // Clear the form fields
        contactForm.reset();

        // 4. Remove the success message automatically after 5 seconds
        setTimeout(() => {
          if (successMessage) {
            successMessage.remove();
          }
        }, 5000);
      }, 1500);
    });
  }
});
