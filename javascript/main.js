let menuDirective = document.querySelector(".navContainer");
let menuIcon = document.getElementById("navImage");
let menuOpen = false;
menuDirective.onclick = openMenu;
menuIcon.onclick = openMenu;
const navIcons = document.querySelectorAll(".elements a");
function openMenu() {
  if (menuOpen) {
    menuDirective.style.height = "82px";
    menuDirective.style.borderRadius = "10%";
    hideNavIcons();
  } else {
    menuDirective.style.height = "99vh";
    menuDirective.style.borderRadius = "20px";
    showNavIcons();
  }
  menuOpen = !menuOpen;
}
function showNavIcons() {
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.opacity = "1";
  }
}
function hideNavIcons() {
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.opacity = "0";
  }
}