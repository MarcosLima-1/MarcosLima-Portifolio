const btu = document.getElementById("buttonup");

function scrollup(){
    window.scrollTo(0,0)
};

function ocultar(){
    if(window.scrollY > 100){
        btu.style.display = "flex"
    } else {
        btu.style.display = "none"
    }
};

ocultar();

window.addEventListener("scroll", ocultar);

var tabsbuttons = document.querySelectorAll(".section_4 .categorias .button")
var tabsbuttons1 = document.querySelectorAll(".section_3 .categorias .button")
var tabs = document.querySelectorAll(".conteudo_4")
var tabs1 = document.querySelectorAll(".conteudo_3")

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