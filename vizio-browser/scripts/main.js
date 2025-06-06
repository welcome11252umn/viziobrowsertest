document.getElementById("menuToggle").addEventListener("click", () => {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("hidden");
});

function navigateTo(page) {
  document.getElementById("mainFrame").src = page;
}