// Header Hamburger Menu
let bar = document.querySelector(".togglebar");

bar.addEventListener("click", toggleBar);

function toggleBar() {
  let menuContent = document.querySelector(".menu-content");
  let changeHamburgerMenu = document.querySelector(".togglebar").classList.toggle("change");
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
}

// Open color description
let colorBar = document.getElementById("toggleColor");
colorBar.addEventListener("click", getPaletteCodes);
function getPaletteCodes() {
  let revealCodes = document.querySelector(".color-description-container");
  let plusSymbol = document.getElementById("plus");
  let minusSymbol = document.getElementById("minus");
  if (revealCodes.style.display === "block") {
    revealCodes.style.display = "none";
    minusSymbol.style.display = "none";
    plusSymbol.style.display = "block";
  } else {
    revealCodes.style.display = "block";
    minusSymbol.style.display = "block";
    plusSymbol.style.display = "none";
  }
}

// Footer
let newYear = new Date();
document.getElementById("currentYear").innerHTML = newYear.getFullYear();
