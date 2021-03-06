// Sticky header elements on scroll
function stickHeaderElements() {
  var userbar = document.getElementById("UserBar");
  var navbar = document.getElementById("Navbar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.appendChild(userbar);
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("HeaderBar").appendChild(userbar);
  }
}

// Tabs display controller
function openPage(pageID) {
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
  if (x.className.includes("w3-show")) {
    x.className = x.className.replace(" w3-show", "");
  } else {
    x.className += " w3-show";
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

window.onscroll = function() {hideElement('Sidebar');stickHeaderElements()};
