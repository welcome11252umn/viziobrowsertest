function goTo(page) {
  window.location.href = page;
}
function loadSite(url) {
  window.location.href = 'browser.html?url=' + encodeURIComponent(url);
}
function goToBrowser() {
  const input = document.getElementById('urlInput').value;
  if (input) loadSite(input);
}
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('sideMenu');
  const toggle = document.getElementById('menuToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});