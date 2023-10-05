// theme changer

var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

// Auto hide Navbar

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var div = document.querySelector('.header'); // Substitua ".meuDiv" pelo seletor do seu div
    
    if (scrollPosition <= 100) {
        div.classList.add('animaDiv');
        div.classList.remove('animaDiv1');
    } else {
        div.classList.remove('animaDiv');
        div.classList.add('animaDiv1');
    }

});

// Responsive Navbar

function toggleDiv() {
    var div = document.getElementById("menu_bar_nav");
    var header = document.getElementById("header_css");
    if (div.style.display === "flex") {
      div.style.display = "none";
      header.style.borderRadius = "0 0 12px 12px"
    } else {
      div.style.display = "flex";
      header.style.borderRadius = "0 0 0 0"
    }
  }

// tabs section

var tabsbuttons = document.querySelectorAll(".section_4 .categorias .button")
var tabsbuttons1 = document.querySelectorAll(".section_3 .categorias .button")
var tabs = document.querySelectorAll(".tabs_1")
var tabs1 = document.querySelectorAll(".tabs")

function projectstabs(panelindex){
    tabsbuttons.forEach(function(node){
        node.style.backgroundColor="#dedfe8";
        node.style.color="#111218";
    });

    tabsbuttons[panelindex].style.backgroundColor="#323549";
    tabsbuttons[panelindex].style.color="#dedfe8";

    tabs.forEach(function(node){
        node.style.display="none";
    });
    tabs[panelindex].style.display="grid";
};

function skillstabs(panelindex){

    tabsbuttons1.forEach(function(node){
        node.style.backgroundColor="#dedfe8";
        node.style.color="#111218";
    });


    tabsbuttons1[panelindex].style.backgroundColor="#323549";
    tabsbuttons1[panelindex].style.color="#dedfe8";

    tabs1.forEach(function(node){
        node.style.display="none";
    });
    tabs1[panelindex].style.display="flex";
};
projectstabs(0);
skillstabs(0);

