window.onload = function() {openPage("Home")};
window.onscroll = function() {hideElement('Sidebar');stickHeaderElements()};
var theme = "light";

// Sticky header elements on scroll
function stickHeaderElements() {
  var btns = document.getElementById("BtnsBar");
  var navbar = document.getElementById("Navbar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("stickynavbar");
    btns.classList.add("stickybtns");
  } else {
    navbar.classList.remove("stickynavbar");
    btns.classList.remove("stickybtns");
  }
}

// Tabs display controller
function openPage(pageID) {
  console.log("test");
  var tabContent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabContent.length; i++) {
    hideElement(tabContent[i]);
  }

  showElement(pageID);
}

function showElement(element) {
  var x;
  if (typeof element =='string') {
    var x = document.getElementById(element);
  } else {
    x = element;
  }

  x.className = x.className.replace(" w3-hide", " w3-show");
}

function hideElement(element) {
  var x;
  if (typeof element =='string') {
    var x = document.getElementById(element);
  } else {
    x = element;
  }

  x.className = x.className.replace(" w3-show", " w3-hide");
}

function toggleShowElement(element) {
  var x;
  if (typeof element =='string') {
    var x = document.getElementById(element);
  } else {
    x = element;
  }
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// function toggleTheme(element) {
//   var lightIconName = 'brightness_low',
//       darkIconName = 'brightness_high',
//       newIconName;
//   if (element.innerHTML == lightIconName) {
//     newIconName = darkIconName;
//   } else {
//     newIconName = lightIconName;
//   }
//   element.innerHTML = element.innerHTML.replace(element.innerHTML, newIconName);
// }
