var tabsbuttons = document.querySelectorAll('.section_4 .categorias .button');
var tabs = document.querySelectorAll('.tabs_1');

function projectstabs(panelindex) {
	tabsbuttons.forEach(function (node) {
		node.classList.add('outline');
	});
	tabsbuttons[panelindex].classList.remove('outline');
	tabs.forEach(function (node) {
		node.style.display = 'none';
	});
	tabs[panelindex].style.display = 'grid';
}
projectstabs(0);

function toggleDiv() {
	var div = document.getElementById('menu_bar_nav');
	var header = document.getElementById('header_css');
	if (div.style.display === 'flex') {
		div.style.display = 'none';
	} else {
		div.style.display = 'flex';
	}
}
