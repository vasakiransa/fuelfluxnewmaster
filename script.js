const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

function openModal() {
  document.getElementById("productsModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("productsModal").classList.add("hidden");
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
  document.getElementById("termsModal").classList.remove("hidden");
}

function closeTermsModal() {
  document.getElementById("termsModal").classList.add("hidden");
}
