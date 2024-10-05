const navDialog = document.getElementById("nav-dialog");

function toggleFAQ(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById("icon-" + id);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    content.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
}

function openTermsModal() {
  const modal = document.getElementById("termsModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeTermsModal() {
  const modal = document.getElementById("termsModal");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

function handleMenu() {
  navDialog.classList.toggle("hidden");
}

// Open Modal Normally - Default Personal form with both tabs visible
function openModal() {
  const modal = document.getElementById("productsModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Show both tabs and default to Personal form
  document.getElementById("personalTab").classList.remove("hidden");
  document.getElementById("businessTab").classList.remove("hidden");

  // Show Personal form by default
  showPersonal();
}

function closeModal() {
  const modal = document.getElementById("productsModal");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

// Function to open Personal form directly and hide the Business tab
function openPersonalForm() {
  const modal = document.getElementById("productsModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex", "justify-center", "items-center");

  // Show Personal form, hide Business tab
  document.getElementById("personalForm").classList.remove("hidden");
  document.getElementById("businessForm").classList.add("hidden");
  document.getElementById("businessTab").classList.add("hidden");

  // Highlight active tab (Personal)
  document.getElementById("personalTab").classList.add("bg-green-300");
  document.getElementById("businessTab").classList.remove("bg-green-300");
}

// Function to open Business form directly and hide the Personal tab
function openBusinessForm() {
  const modal = document.getElementById("productsModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex", "justify-center", "items-center");

  // Show Business form, hide Personal tab
  document.getElementById("businessForm").classList.remove("hidden");
  document.getElementById("personalForm").classList.add("hidden");
  document.getElementById("personalTab").classList.add("hidden");

  // Highlight active tab (Business)
  document.getElementById("businessTab").classList.add("bg-green-300");
  document.getElementById("personalTab").classList.remove("bg-green-300");
}

// Show Personal form and allow switching between tabs
function showPersonal() {
  document.getElementById("personalForm").classList.remove("hidden");
  document.getElementById("businessForm").classList.add("hidden");

  // Keep the active tab highlighted
  document.getElementById("personalTab").classList.add("bg-green-300");
  document.getElementById("businessTab").classList.remove("bg-green-300");
}

// Show Business form and allow switching between tabs
function showBusiness() {
  document.getElementById("businessForm").classList.remove("hidden");
  document.getElementById("personalForm").classList.add("hidden");

  // Keep the active tab highlighted
  document.getElementById("businessTab").classList.add("bg-green-300");
  document.getElementById("personalTab").classList.remove("bg-green-300");
}

function sendMail(event) {
  event.preventDefault(); // Prevent form from submitting/reloading the page

  // Collect form data
  let params = {
    personalName: document.getElementById("personalName").value,
    personalEmail: document.getElementById("personalEmail").value,
    personalTel: document.getElementById("personalTel").value,
    personalFeedback: document.getElementById("personalFeedback").value,
  };

  // Send email using EmailJS
  emailjs.send("service_gzv0ypk", "template_r9gkc8l", params).then(
    function (response) {
      // Show success alert
      alert("Email Sent Successfully!");
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      // Handle error
      alert("Failed to send email. Please try again later.");
      console.log("FAILED...", error);
    }
  );
}

// Function to send Business form data via EmailJS
function sendBusinessMail(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect Business form data
  let params = {
    businessName: document.getElementById("businessName").value,
    businessEmail: document.getElementById("businessEmail").value,
    businessTel: document.getElementById("businessTel").value,
    businessType: document.getElementById("businessType").value,
    businessInquiryDetails: document.getElementById("businessInquiryDetails")
      .value,
  };

  // Send email using EmailJS for Business form
  emailjs.send("service_gzv0ypk", "template_r9gkc8l", params).then(
    function (response) {
      alert("Business Inquiry Sent Successfully!");
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("Failed to send Business Inquiry. Please try again later.");
      console.log("FAILED...", error);
    }
  );
}

// Function to open the About Us modal
function openAboutUsModal() {
  document.getElementById("aboutUsModal").classList.remove("hidden");
  document.getElementById("aboutUsModal").classList.add("flex");
}

// Function to close the About Us modal
function closeAboutUsModal() {
  document.getElementById("aboutUsModal").classList.add("hidden");
  document.getElementById("aboutUsModal").classList.remove("flex");
}
