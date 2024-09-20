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
