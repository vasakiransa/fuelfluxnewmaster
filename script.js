const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

function openModal() {
  const modal = document.getElementById("productsModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("productsModal");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

function showPersonal() {
  document.getElementById("personalForm").classList.remove("hidden");
  document.getElementById("businessForm").classList.add("hidden");
}

function showBusiness() {
  document.getElementById("businessForm").classList.remove("hidden");
  document.getElementById("personalForm").classList.add("hidden");
}

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

// Function to show the Personal form and update the indicator
function showPersonal() {
  document.getElementById("personalForm").classList.remove("hidden");
  document.getElementById("businessForm").classList.add("hidden");
  document.getElementById("personalTab").classList.add("bg-green-300");
  document.getElementById("businessTab").classList.remove("bg-green-300");
}

// Function to show the Business form and update the indicator
function showBusiness() {
  document.getElementById("businessForm").classList.remove("hidden");
  document.getElementById("personalForm").classList.add("hidden");
  document.getElementById("businessTab").classList.add("bg-green-300");
  document.getElementById("personalTab").classList.remove("bg-green-300");
}

// Functions to handle opening the modals from different buttons across the website
function openPersonalForm() {
  // Always make sure the modal has 'flex', 'justify-center', 'items-center' applied
  const modal = document.getElementById("productsModal");
  modal.classList.remove("hidden"); // Remove hidden to show the modal
  modal.classList.add("flex", "justify-center", "items-center"); // Make sure flex centering is applied

  showPersonal(); // Open the personal form
}

function openBusinessForm() {
  // Always make sure the modal has 'flex', 'justify-center', 'items-center' applied
  const modal = document.getElementById("productsModal");
  modal.classList.remove("hidden"); // Remove hidden to show the modal
  modal.classList.add("flex", "justify-center", "items-center"); // Make sure flex centering is applied

  showBusiness(); // Open the business form
}
